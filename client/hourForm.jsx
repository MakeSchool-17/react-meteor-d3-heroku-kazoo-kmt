//Give your component a name called HourForm - use React.createClass to create the object
HourForm = React.createClass({

    hundleSubmit: function(e) {
        e.preventDefault();

        var numHours = React.findDOMNode(this.refs.numHours),
            hourDate = React.findDOMNode(this.refs.hourDate);

        Meteor.call('insertHour', numHours.value, moment(hourDate.value).toDate(), function(e, r) {
            if(e)alert(e.reason)
        });

        numHours.value = '';
        hourDate.value = '';
    },

    render: function() {
    // Return your JSX within brackets - the HTML should display a simple form with
    // 2 input elements and a submit button
    return (
        <div className="panel panel-default">

          <div className="panel-heading">
            <h3 className="panel-title">Hours Spent Coding</h3>
          </div>

          <div className="panel-body">

            <form className="form-horizontal" onSubmit={this.handleSubmit}>

              <div className="form-group">
                <div className="col-sm-10">
                  <input type="number" className="form-control"
                      placeholder="How many hours?" ref="numHours" />
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-10">
                  <input type="date" className="form-control" ref="hourDate"/>
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-primary btn-block">Add</button>
                </div>
              </div>

            </form>

          </div>

        </div>
    );
  }
});
