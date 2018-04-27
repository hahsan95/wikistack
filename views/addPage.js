const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <div class=“form-group”>
      <label for="name" class=“col-sm-2 control-label”>Name</label>
        <div class=“col-sm-10">
        <input id="name" name="name" type=“text” class=“form-control”/>
        </div>
    </div>


    <div class=“form-group”>
      <label for="Email" class=“col-sm-2 control-label”>Email</label>
        <div class=“col-sm-10">
        <input id="Email" name="Email" type=“text” class=“form-control”/>
        </div>
    </div>


    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>


  <div class = "form-group">
    <label for="Content" class="col-sm-2 control-label">New Post</label>
      <div class="col-sm-10">
        <textarea rows = "4" cols ="50"></textarea>
      </div>
  </div>

  <div class = "form-group">
    <div class="col-sm-10">
    <label for="Status" class="col-sm-2 control-label">Status</label>
    </div>
    <select>
      <option>Open</option>
      <option>Closed</option>
    </select>
  </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

    </form>
    </hr>
`);
