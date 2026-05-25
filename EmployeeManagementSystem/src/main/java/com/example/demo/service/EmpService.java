package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repo.EmpRepo;
import com.example.demo.entity.EmpEntity;

@Service
public class EmpService {
	@Autowired
	private EmpRepo repo;
	
	public EmpEntity addEmployee(EmpEntity empEntity) {
		return repo.save(empEntity);
	}
	
	public List<EmpEntity> getAllusers() {
		return repo.findAll();
	}
	public void deleteByID(Long id) {
		repo.deleteById(id);
		
	}
	public EmpEntity updateEmployee(long id, EmpEntity empEntity) {
		EmpEntity emp = repo.findById(id).orElse(null);
		if(emp != null) {
			emp.setName(empEntity.getName());
			emp.setAddress(empEntity.getAddress());
			emp.setSalary(empEntity.getSalary());

			return repo.save(emp);
		}
		
		return null;
	}


}
