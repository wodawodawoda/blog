const exampletemplate = `
<span class="name"><%= name %></span>
<div>
		<button class="btn btn-warning edit-example">Edit</button>
		<button class="btn btn-danger delete-example">Delete</button>
		<button class="btn btn-success update-example d-none">Update</button>
		<button class="btn btn-danger cancel-example d-none">Cancel</button>
		<a href="#/examples/<%-_id%>" class="btn btn-primary preview-example">Preview</a>
		<a href="#/" class="btn btn-primary return-example d-none">Return</a>
</div>
`
export default exampletemplate
