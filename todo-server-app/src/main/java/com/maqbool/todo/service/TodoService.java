/**
 * 
 */
package com.maqbool.todo.service;

import java.util.List;

import com.maqbool.todo.exceptions.ServiceException;
import com.maqbool.todo.model.Todo;

public interface TodoService {

	/**
	 * List the todo entities
	 * 
	 * @return List<Todo>
	 * @throws ServiceException
	 */
	List<Todo> getTodos() throws ServiceException;

	/**
	 * Store the entity (upsert)
	 * 
	 * @param t
	 *            - entity
	 * @return stored entity
	 * @param t
	 * @return
	 * @throws ServiceException
	 */
	Todo store(Todo t) throws ServiceException;

	/**
	 * Delete the entity by given id
	 * 
	 * @param id
	 * @return true if deleted
	 * @throws ServiceException
	 */
	Boolean delete(String id) throws ServiceException;

}
