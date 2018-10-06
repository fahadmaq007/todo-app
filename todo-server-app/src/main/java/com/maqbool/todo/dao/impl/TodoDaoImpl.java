package com.maqbool.todo.dao.impl;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Component;

import com.maqbool.todo.dao.TodoDao;
import com.maqbool.todo.exceptions.DataAccessException;
import com.maqbool.todo.model.Todo;

import io.jsondb.JsonDBTemplate;

@Component
public class TodoDaoImpl implements TodoDao {

	//Actual location on disk for database files, process should have read-write permissions to this folder
	private String dbFilesLocation = getClass().getResource("/").getPath();

	//Java package name where POJO's are present
	private String baseScanPackage = "com.maqbool.todo.model";
	
	private JsonDBTemplate jsonDBTemplate = new JsonDBTemplate(dbFilesLocation, baseScanPackage);
	
	public TodoDaoImpl() {
		if (! jsonDBTemplate.collectionExists(Todo.class)) {
			jsonDBTemplate.createCollection(Todo.class);
		}
	}
	@Override
	public Todo store(Todo t) throws DataAccessException {
		try {
			String id = t.getId();
			if (id == null) {
				id = UUID.randomUUID().toString();
				t.setId(id);
			}
			jsonDBTemplate.upsert(t);
			return t;
		} catch (Exception e) {
			throw new DataAccessException(e.getMessage(), e);
		}
	}

	@Override
	public Boolean delete(String id) throws DataAccessException {
		try {
			Todo t = new Todo();
			t.setId(id);
			jsonDBTemplate.remove(t, Todo.class);
			return true;
		} catch (Exception e) {
			throw new DataAccessException(e.getMessage(), e);
		}
	}

	@Override
	public List<Todo> getTodos() throws DataAccessException {
		try {
			return jsonDBTemplate.findAll(Todo.class);
		} catch (Exception e) {
			throw new DataAccessException(e.getMessage(), e);
		}
	}

	@Override
	public Todo get(String id) throws DataAccessException {
		try {
			return jsonDBTemplate.findById(id, Todo.class);
		} catch (Exception e) {
			throw new DataAccessException(e.getMessage(), e);
		}
	}

}
