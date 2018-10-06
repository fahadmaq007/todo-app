package com.maqbool.todo.model;

import io.jsondb.annotation.Document;
import io.jsondb.annotation.Id;

@Document(collection = "todos", schemaVersion= "1.0")
public class Todo {

	@Id
	private String id;

	private String task;
	
	private boolean completed;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public boolean isCompleted() {
		return completed;
	}

	public void setCompleted(boolean completed) {
		this.completed = completed;
	}
}
