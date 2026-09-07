package com.lyndsey.littlecreatures.little_creatures_backend.repository;

import com.lyndsey.littlecreatures.little_creatures_backend.model.Parent;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface ParentRepository extends JpaRepository<Parent, Integer> {
    Optional<Parent> findByEmail(String email);
}

