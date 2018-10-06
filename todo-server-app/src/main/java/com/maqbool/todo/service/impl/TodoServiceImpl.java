/**
 * 
 */
package com.maqbool.todo.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maqbool.todo.dao.TodoDao;
import com.maqbool.todo.exceptions.DataAccessException;
import com.maqbool.todo.exceptions.ServiceException;
import com.maqbool.todo.model.Todo;
import com.maqbool.todo.service.TodoService;

@Service
public class TodoServiceImpl implements TodoService {
	
	@Autowired
	private TodoDao todoDao;

	private Logger logger = LoggerFactory.getLogger(getClass());
	
	@Override
	public List<Todo> getTodos() throws ServiceException {
		try {
			logger.info("listing todos...");
			return todoDao.getTodos();
		} catch (DataAccessException e) {
			throw new ServiceException(e.getMessage(), e);
		}
	}

	@Override
	public Todo store(Todo t) throws ServiceException {
		try {
			logger.info("storing todo... " + t.getTask());
			return todoDao.store(t);
		} catch (DataAccessException e) {
			throw new ServiceException(e.getMessage(), e);
		}
	}

	@Override
	public Boolean delete(String id) throws ServiceException {
		try {
			logger.info("deleting todo#" + id);
			return todoDao.delete(id);
		} catch (DataAccessException e) {
			throw new ServiceException(e.getMessage(), e);
		}
	}

}
