package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.EmpEntity;

@Repository

public interface EmpRepo extends JpaRepository<EmpEntity, Long>  {

}
