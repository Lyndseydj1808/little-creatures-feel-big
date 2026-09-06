package com.lyndsey.littlecreatures.little_creatures_backend.repository;

import com.lyndsey.littlecreatures.little_creatures_backend.model.Child;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChildRepository extends JpaRepository<Child, Integer> {
}
