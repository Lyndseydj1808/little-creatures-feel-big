package com.lyndsey.littlecreatures.little_creatures_backend.controller;

import com.lyndsey.littlecreatures.little_creatures_backend.DTO.ChildRequestDTO;
import com.lyndsey.littlecreatures.little_creatures_backend.DTO.ChildResponseDTO;
import com.lyndsey.littlecreatures.little_creatures_backend.model.Child;
import com.lyndsey.littlecreatures.little_creatures_backend.model.Parent;
import com.lyndsey.littlecreatures.little_creatures_backend.repository.ChildRepository;
import com.lyndsey.littlecreatures.little_creatures_backend.repository.ParentRepository;
import com.lyndsey.littlecreatures.little_creatures_backend.service.PinGuardService;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RestController
@RequestMapping("child")

public class ChildController {

    @Autowired
    private ParentRepository parentRepository;

    @Autowired
    private ChildRepository childRepository;

    @Autowired
    private PinGuardService pinGuard;

//Should have a check to make sure the parent is logged in and owns the child....the current set up means anyone could edit a child even if it wasnt there account.
//@GetMapping("{childId}")
//public ChildResponseDTO getChild(@PathVariable int childId, HttpSession session) {
//    // 1. Who is asking? Same session read you use for the parent.
//    Integer parentId = (Integer) session.getAttribute("parentId");
//    if (parentId == null) {
//        throw new NotLoggedInException("Not logged in");
//    }
//
//    // 2. Look up the requested child.
//    Child child = childRepository.findById(childId).orElseThrow();
//
//    // 3. Does the logged-in parent actually own this child?
//    if (child.getParent().getParentId() != parentId) {
//        throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not your child");
//    }
//
//    ChildResponseDTO response = new ChildResponseDTO();
//    response.setChildId(child.getChildId());
//    response.setName(child.getName());
//    response.setAge(child.getAge());
//    response.setStarCount(child.getStarCount());
//    response.setCreatureChoice(child.getCreatureChoice());
//    response.setParentId(child.getParent().getParentId());
//
//    return response;
//}
    @GetMapping("{childId}")
    public ChildResponseDTO getChild(@PathVariable int childId) {
        Child child = childRepository.findById(childId).orElseThrow();

        ChildResponseDTO response = new ChildResponseDTO();
        response.setChildId(child.getChildId());
        response.setName(child.getName());
        response.setAge(child.getAge());
        response.setStarCount(child.getStarCount());
        response.setCreatureChoice(child.getCreatureChoice());
        response.setParentId(child.getParent().getParentId());

        return response;
    }

    @PutMapping("{childId}")
    public ChildResponseDTO updateChild(@PathVariable int childId, @Valid @RequestBody ChildRequestDTO dto, HttpSession session) {
        pinGuard.requireUnlocked(session);
        Child existingChild = childRepository.findById(childId).orElseThrow();

        existingChild.setName(dto.getName());
        existingChild.setAge(dto.getAge());
        existingChild.setStarCount(dto.getStarCount());
        existingChild.setCreatureChoice(dto.getCreatureChoice());

        Child updatedChild = childRepository.save(existingChild);

        ChildResponseDTO response = new ChildResponseDTO();
        response.setChildId(updatedChild.getChildId());
        response.setName(updatedChild.getName());
        response.setAge(updatedChild.getAge());
        response.setStarCount(updatedChild.getStarCount());
        response.setCreatureChoice(updatedChild.getCreatureChoice());
        response.setParentId(updatedChild.getParent().getParentId());

        return response;
    }

    @DeleteMapping("{childId}")
    public void deleteChild(@PathVariable int childId, HttpSession session) {
        pinGuard.requireUnlocked(session);
        childRepository.deleteById(childId);
    }
}

