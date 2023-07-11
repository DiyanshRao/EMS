package com.DiyanshRao.employesystemapi.repository;

import com.DiyanshRao.employesystemapi.entity.EmployeeEntity;
import com.DiyanshRao.employesystemapi.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity , Long> {
}
