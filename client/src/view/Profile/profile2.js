<div>
                <nav className="navbar navbar-inverse container" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Aplication</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Username <b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li align="center" className="well">
                                        <div><img className="img-responsive" style={{padding: '2%'}} src="https://bootdey.com/img/Content/avatar/avatar1.png"/><a className="change" href="">Change Picture</a></div>
                                        <a href="#" className="btn btn-sm btn-default"><span className="glyphicon glyphicon-lock"></span> Security</a>
                                        <a href="#" className="btn btn-sm btn-default"><span className="glyphicon glyphicon-log-out"></span> Logout</a>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                        </div>   {/* </div> .navbar-collapse  */}
                    </div>  {/*<!-- /.container-fluid -->*/}
                </nav>


                <div className="container bootstrap snippet">
                    <div className="row well">
                        <div className="col-md-2">
                            <ul className="nav nav-pills nav-stacked well">
                                <li  className="active"><a href="#"><i className="fa fa-envelope"></i> Compose</a></li>
                                <li><a href="#"><i className="fa fa-home"></i> Home</a></li>
                                <li><a href="#"><i className="fa fa-user"></i> Profile</a></li>
                                <li><a href="#"><i className="fa fa-key"></i> Security</a></li>
                                <li><a href="#"><i className="fa fa-sign-out"></i> Logout</a></li>
                            </ul>
                        </div>
                        <div className="col-md-10">
                            <div className="panel">
                                <img className="pic img-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..."/>
                                <div className="name"><small>User full name</small></div>
                                <a href="#" className="btn btn-xs btn-primary pull-right" style={{margin:'10px'}}><span className="glyphicon glyphicon-picture"></span> Change cover</a>
                            </div>
                                    
                            <b/><br/><br/>
                            <ul className="nav nav-tabs" id="myTab">
                                <li className="active"><a href="#inbox" data-toggle="tab"><i className="fa fa-envelope-o"></i> Inbox</a></li>
                                <li><a href="#sent" data-toggle="tab"><i className="fa fa-reply-all"></i> Sent</a></li>
                                <li><a href="#assignment" data-toggle="tab"><i className="fa fa-file-text-o"></i> Assignment</a></li>
                                <li><a href="#event" data-toggle="tab"><i className="fa fa-clock-o"></i> Event</a></li>
                            </ul>
                        
                            <div className="tab-content">
                                <div className="tab-pane active" id="inbox">
                                    <a type="button" data-toggle="collapse" data-target="#a1">
                                        <div className="btn-toolbar well well-sm" role="toolbar"  style={{margin:'0px'}}>
                                            <div className="btn-group"><input type="checkbox"/></div>
                                            <div className="btn-group col-md-3">Admin Kumar</div>
                                            <div className="btn-group col-md-8"><b>Hi Check this new Bootstrap plugin</b> <div className="pull-right"><i className="glyphicon glyphicon-time"></i> 12:10 PM <button className="btn btn-primary btn-xs" data-toggle="modal" data-target=".bs-example-modal-lg"><i className="fa fa-share-square-o"> Reply</i></button></div> </div>
                                        </div>
                                    </a>
                                    <div id="a1" className="collapse out well">This is the message body1</div>
                                    <br/>
                                    <button className="btn btn-primary btn-xs"><i className="fa fa-check-square-o"></i> Delete Checked Item's</button>
                                </div>
                            
                        
                                <div className="tab-pane" id="sent">
                                    <a type="button" data-toggle="collapse" data-target="#s1">
                                        <div className="btn-toolbar well well-sm" role="toolbar"  style={{margin:'0px'}}>
                                            <div className="btn-group"><input type="checkbox"/></div>
                                            <div className="btn-group col-md-3">Kumar</div>
                                            <div className="btn-group col-md-8"><b>This is reply from Bootstrap plugin</b> <div className="pull-right"><i className="glyphicon glyphicon-time"></i> 12:30 AM</div> </div>
                                        </div>
                                    </a>
                                    <div id="s1" className="collapse out well">This is the message body1</div>
                                    <br/>
                                    <button className="btn btn-primary btn-xs"><i className="fa fa-check-square-o"></i> Delete Checked Item's</button>
                                </div>
                        
                        
                                <div className="tab-pane" id="assignment">
                                    <a href=""><div className="well well-sm" style={{margin:'0px'}}>Open GL Assignments <span className="pull-right"><i className="glyphicon glyphicon-time"></i> 12:20 AM 20 Dec 2014 </span></div></a>        
                                </div>
                        
                                <div className="tab-pane" id="event">
                                    <div className="media">
                                        <a className="pull-left" href="#">
                                            <img className="media-object img-thumbnail" width="100" src="https://lorempixel.com/200/200/nature/1/" alt="..."/>
                                        </a>
                                        <div className="media-body">
                                            <h4 className="media-heading">Animation Workshop</h4>
                                            2Days animation workshop to be conducted
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content"><br/><br/>
                            <form className="form-horizontal">
                                <fieldset>
                                    <div className="form-group">
                                        <label className="col-md-2 control-label" htmlFor="body">Body :</label>  
                                        <div className="col-md-8">
                                        <input id="body" name="body" type="text" placeholder="Message Body" className="form-control input-md"/>
                                            
                                        </div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label className="col-md-2 control-label" htmlFor="message">Message :</label>
                                        <div className="col-md-8">                     
                                            <textarea className="form-control" id="message" name="message"></textarea>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label className="col-md-2 control-label" htmlFor="send"></label>
                                        <div className="col-md-8">
                                            <button id="send" name="send" className="btn btn-primary">Send</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>