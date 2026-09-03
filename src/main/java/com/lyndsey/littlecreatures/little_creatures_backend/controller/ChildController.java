package com.lyndsey.littlecreatures.little_creatures_backend.controller;

import com.lyndsey.littlecreatures.little_creatures_backend.DTO.ChildRequestDTO;
import com.lyndsey.littlecreatures.little_creatures_backend.DTO.ChildResponseDTO;
import com.lyndsey.littlecreatures.little_creatures_backend.model.Child;
import com.lyndsey.littlecreatures.little_creatures_backend.model.Parent;
import com.lyndsey.littlecreatures.little_creatures_backend.repository.ChildRepository;
import com.lyndsey.littlecreatures.little_creatures_backend.repository.ParentRepository;
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
    public ChildResponseDTO updateChild(@PathVariable int childId, @Valid @RequestBody ChildRequestDTO dto) {
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
    public void deleteChild(@PathVariable int childId) {
        childRepository.deleteById(childId);
    }
}

