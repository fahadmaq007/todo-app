package com.maqbool.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.maqbool.todo.exceptions.ServiceException;
import com.maqbool.todo.model.Todo;
import com.maqbool.todo.service.TodoService;

/**
 * The TodoController (REST) is exposed to the external world.
 * Consumes & Produces JSON
 * @author maqbool
 *
 */
@Controller
@CrossOrigin(origins = {"http://localhost:4200"})
@RequestMapping(value = "/todos", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
public class TodoController {
	
	@Autowired
	private TodoService userService;
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<Todo> userDetails() throws ServiceException {
		List<Todo> todos = userService.getTodos();
		return todos;
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public @ResponseBody Todo store(@RequestBody(required = true) Todo t) throws ServiceException {
		return userService.store(t);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public @ResponseBody Boolean delete(@PathVariable(required = true) String id) throws ServiceException {
		return userService.delete(id);
	}
}
