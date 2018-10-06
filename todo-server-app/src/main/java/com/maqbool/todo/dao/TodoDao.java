package com.maqbool.todo.dao;

import java.util.List;

import com.maqbool.todo.exceptions.DataAccessException;
import com.maqbool.todo.model.Todo;
/**
 * This class is a DAO for todo entity
 * @author maqbool
 *
 */
public interface TodoDao {

	/**
	 * List the todo entities
	 * @return List<Todo>
	 * @throws DataAccessException
	 */
	List<Todo> getTodos() throws DataAccessException;

	/**
	 * Store the entity (upsert)
	 * @param t - entity
	 * @return stored entity
	 * @throws DataAccessException
	 */
	Todo store(Todo t) throws DataAccessException;

	/**
	 * Delete the entity by given id
	 * @param id 
	 * @return true if deleted
	 * @throws DataAccessException
	 */
	Boolean delete(String id) throws DataAccessException;

	/**
	 * Get the entity by given id.
	 * @param id
	 * @return
	 * @throws DataAccessException
	 */
	Todo get(String id) throws DataAccessException;
}
