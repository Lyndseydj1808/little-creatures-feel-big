package com.lyndsey.littlecreatures.little_creatures_backend.controller;

import com.lyndsey.littlecreatures.little_creatures_backend.DTO.*;
import com.lyndsey.littlecreatures.little_creatures_backend.model.Child;
import com.lyndsey.littlecreatures.little_creatures_backend.model.Parent;
import com.lyndsey.littlecreatures.little_creatures_backend.repository.ChildRepository;
import com.lyndsey.littlecreatures.little_creatures_backend.repository.ParentRepository;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import com.lyndsey.littlecreatures.little_creatures_backend.exceptions.NotLoggedInException;
import com.lyndsey.littlecreatures.little_creatures_backend.service.PinGuardService;
import org.springframework.web.server.ResponseStatusException;

@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RestController
@RequestMapping("parent")
public class ParentController {

    @Autowired
    private ParentRepository parentRepository;

    @Autowired
    private ChildRepository childRepository;

    @Autowired
    private PinGuardService pinGuard;

    private static final int MAX_PIN_ATTEMPTS = 5;
    private static final int PIN_LOCK_MINUTES = 5;

    @PostMapping
    public ParentResponseDTO createParent(@Valid @RequestBody ParentRequestDTO dto) {
        Parent parent = new Parent(dto.getEmail(), dto.getPassword(), dto.getFirstName(), dto.getLastName());
        parent = parentRepository.save(parent);

        ParentResponseDTO response = new ParentResponseDTO();
        response.setParentId(parent.getParentId());
        response.setEmail(parent.getEmail());
        response.setFirstName(parent.getFirstName());
        response.setLastName(parent.getLastName());

        return response;
    }
//don't need this....getCurrentParent is the updated secure version....
    @GetMapping("{parentId}")
    public ParentResponseDTO getParent(@PathVariable int parentId) {
        Parent parent = parentRepository.findById(parentId).orElseThrow();

        ParentResponseDTO response = new ParentResponseDTO();
        response.setParentId(parent.getParentId());
        response.setEmail(parent.getEmail());
        response.setFirstName(parent.getFirstName());
        response.setLastName(parent.getLastName());

        return response;
    }


    //Need this so the frontend has a way to check if the user is logged in and get the current parent info
    @GetMapping("me")
    public ParentResponseDTO getCurrentParent(HttpSession session) {
        Integer parentId = (Integer) session.getAttribute("parentId");

        if (parentId == null) {
            throw new NotLoggedInException("Not logged in");
        }

        Parent parent = parentRepository.findById(parentId).orElseThrow();

        ParentResponseDTO response = new ParentResponseDTO();
        response.setParentId(parent.getParentId());
        response.setEmail(parent.getEmail());
        response.setFirstName(parent.getFirstName());
        response.setLastName(parent.getLastName());

        return response;
    }

    @PutMapping("updateParent")
    public ParentResponseDTO updateParent(HttpSession session, @Valid @RequestBody ParentUpdateAccountRequestDTO dto) {
        Integer parentId = (Integer) session.getAttribute("parentId");

        if (parentId == null) {
            throw new NotLoggedInException("Not logged in");
        }

        pinGuard.requireUnlocked(session);

        Parent existingParent = parentRepository.findById(parentId).orElseThrow();

        existingParent.setEmail(dto.getEmail());
        existingParent.setFirstName(dto.getFirstName());
        existingParent.setLastName(dto.getLastName());

        Parent updatedParent = parentRepository.save(existingParent);

        ParentResponseDTO response = new ParentResponseDTO();
        response.setParentId(updatedParent.getParentId());
        response.setEmail(updatedParent.getEmail());
        response.setFirstName(updatedParent.getFirstName());
        response.setLastName(updatedParent.getLastName());

        return response;
    }

    @PutMapping("updatePassword")
    public ResponseEntity<Void> updatePassword(HttpSession session, @Valid @RequestBody ParentUpdatePasswordRequestDTO dto) {
        Integer parentId = (Integer) session.getAttribute("parentId");

        if (parentId == null) {
            throw new NotLoggedInException("Not logged in");
        }
        pinGuard.requireUnlocked(session);

        Parent existingParent = parentRepository.findById(parentId).orElseThrow();

        existingParent.setPwHash(dto.getPassword());

        Parent updatedPassword = parentRepository.save(existingParent);

        return ResponseEntity.ok().build();
    }


    @DeleteMapping("deleteParent")
    public ResponseEntity<Void> deleteParent(HttpSession session) {
        Integer parentId = (Integer) session.getAttribute("parentId");

        if (parentId == null) {
            throw new NotLoggedInException("Not logged in");
        }
        pinGuard.requireUnlocked(session);
        parentRepository.deleteById(parentId);

        return ResponseEntity.ok().build();
    }

    @PostMapping("child")
    public ChildResponseDTO createChild(@Valid @RequestBody ChildRequestDTO dto, HttpSession session) {
        Integer parentId = (Integer) session.getAttribute("parentId");
        if (parentId == null) {
            throw new RuntimeException("Parent not logged in");
        }

        pinGuard.requireUnlocked(session);

        Parent parent = parentRepository.findById(parentId).orElseThrow();
        Child child = new Child(dto.getName(), dto.getAge(), dto.getStarCount(), dto.getCreatureChoice());
        parent.addChild(child);
        child = childRepository.save(child);


        ChildResponseDTO response = new ChildResponseDTO();
        response.setChildId(child.getChildId());
        response.setName(child.getName());
        response.setAge(child.getAge());
        response.setStarCount(child.getStarCount());
        response.setCreatureChoice(child.getCreatureChoice());
        response.setParentId(child.getParent().getParentId());

        return response;
    }

    @PostMapping("login")
    public ParentResponseDTO login(@Valid @RequestBody LoginRequestDTO dto, HttpSession session) {
        Parent parent = parentRepository.findByEmail(dto.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid email or password"));

        if (!parent.isMatchingPassword(dto.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }

        session.setAttribute("parentId", parent.getParentId());
        pinGuard.lock(session); // a new login always starts with the PIN locked

        ParentResponseDTO response = new ParentResponseDTO();
        response.setParentId(parent.getParentId());
        response.setEmail(parent.getEmail());
        response.setFirstName(parent.getFirstName());
        response.setLastName(parent.getLastName());

        return response;
    }

    // ---------------- Parental PIN ----------------

    // Same "who is logged in?" check used above, in one reusable place for the PIN endpoints
    private Parent getLoggedInParent(HttpSession session) {
        Integer parentId = (Integer) session.getAttribute("parentId");
        if (parentId == null) {
            throw new NotLoggedInException("Not logged in");
        }
        return parentRepository.findById(parentId).orElseThrow();
    }

    // Lets React ask: does this parent have a PIN yet, and is the dashboard unlocked right now?
    @GetMapping("pin/status")
    public PinStatusResponseDTO getPinStatus(HttpSession session) {
        Parent parent = getLoggedInParent(session);
        return new PinStatusResponseDTO(parent.hasPin(), pinGuard.isUnlocked(session));
    }

    // First-time PIN setup. Only allowed when no PIN exists yet (changing one goes through verify or reset).
    @PostMapping("pin")
    public ResponseEntity<Void> setPin(@Valid @RequestBody PinRequestDTO dto, HttpSession session) {
        Parent parent = getLoggedInParent(session);

        if (parent.hasPin()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "PIN already set");
        }

        parent.setPin(dto.getPin());
        parentRepository.save(parent);
        pinGuard.markVerified(session);

        return ResponseEntity.ok().build();
    }

    @PostMapping("pin/verify")
    public ResponseEntity<Void> verifyPin(@Valid @RequestBody PinRequestDTO dto, HttpSession session) {
        Parent parent = getLoggedInParent(session);

        if (!parent.hasPin()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "No PIN set yet");
        }

        if (parent.isPinLocked()) {
            throw new ResponseStatusException(HttpStatus.TOO_MANY_REQUESTS, "Too many incorrect attempts. Try again later.");
        }

        if (!parent.isMatchingPin(dto.getPin())) {
            parent.recordFailedPinAttempt(MAX_PIN_ATTEMPTS, PIN_LOCK_MINUTES);
            parentRepository.save(parent);
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Incorrect PIN");
        }

        parent.clearPinFailures();
        parentRepository.save(parent);
        pinGuard.markVerified(session);

        return ResponseEntity.ok().build();
    }

    // Forgot the PIN? Prove it's really the parent by re-entering the account password, then pick a new PIN.
    @PostMapping("pin/reset")
    public ResponseEntity<Void> resetPin(@Valid @RequestBody PinResetRequestDTO dto, HttpSession session) {
        Parent parent = getLoggedInParent(session);

        if (!parent.isMatchingPassword(dto.getPassword())) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Incorrect password");
        }

        parent.setPin(dto.getNewPin());
        parentRepository.save(parent);
        pinGuard.markVerified(session);

        return ResponseEntity.ok().build();
    }

    // Lets React re-lock the dashboard right away (for example when a parent hands the device back to a child)
    @PostMapping("pin/lock")
    public ResponseEntity<Void> lockPin(HttpSession session) {
        getLoggedInParent(session);
        pinGuard.lock(session);
        return ResponseEntity.ok().build();
    }

    @PostMapping("logout")
    public ResponseEntity<Void> logout(HttpSession session) {
        session.invalidate();
        return ResponseEntity.ok().build();
    }


    @GetMapping("childList")
    public List<ChildResponseDTO> getChildList(HttpSession session) {
        Integer parentId = (Integer) session.getAttribute("parentId");
        if (parentId == null) {
            throw new RuntimeException("Parent not logged in");
        }

        Parent parent = parentRepository.findById(parentId).orElseThrow();
        List<Child> childList = parent.getChildList();
        List<ChildResponseDTO> responseList = new ArrayList<>();

        for (Child child : childList) {
            ChildResponseDTO response = new ChildResponseDTO();
            response.setChildId(child.getChildId());
            response.setName(child.getName());
            response.setAge(child.getAge());
            response.setStarCount(child.getStarCount());
            response.setCreatureChoice(child.getCreatureChoice());
            response.setParentId(child.getParent().getParentId());
            responseList.add(response);
        }

        return responseList;
        }
    }



