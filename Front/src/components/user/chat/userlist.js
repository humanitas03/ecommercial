import React,{ Component }  from 'react';
import { Client } from '@stomp/stompjs';
import './userlist.css'; 
import { NavLink } from 'react-router-dom';
class userlist extends Component{
  state = {
    serverTime: null,
  } 

  componentDidMount() {
    console.log('Component did mount');
    // The compat mode syntax is totally different, converting to v5 syntax
    // Client is imported from '@stomp/stompjs'
    this.client = new Client();

    this.client.configure({
      brokerURL: 'ws://localhost:8080/stomp',
      onConnect: () => {
        console.log('onConnect');

        this.client.subscribe('/queue/now', message => {
          console.log(message);
          this.setState({serverTime: message.body});
        });

        this.client.subscribe('/topic/greetings', message => {
          alert(message.body);
        });
      },
      // Helps during debugging, remove in production
      debug: (str) => {
        console.log(new Date(), str);
      }
    });

    this.client.activate();
  }

  clickHandler = () => {
    this.client.publish({destination: '/app/greetings', body: 'Hello world'});
  }

  render() {
    return (
<div>   <h1>Mila 돋보기 클릭</h1>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="main-box clearfix">
          <div className="table-responsive">
            <table className="table user-list">
              <thead>
                <tr>
                  <th><span>User</span></th>
                  <th><span>Created</span></th>
                  <th className="text-center"><span>Status</span></th>
                  <th><span>Email</span></th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt />
                    <a href="#" className="user-link">Mila Kunis</a>
                    <span className="user-subhead">Admin</span>
                  </td>
                  <td>
                    2013/08/08
                  </td>
                  <td className="text-center">
                    <span className="label label-default">Inactive</span>
                  </td>
                  <td>
                    <a href="#">mila@kunis.com</a>
                  </td>
                  <td style={{width: '20%'}}>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <NavLink to="/usertimeline"><i className="fa fa-search-plus fa-stack-1x fa-inverse" /></NavLink>
                      </span>
                    </a>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                    <a href="#" className="table-link danger">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                      </span>
                      
                    </a>
                    <div class="pull-right">
                    <button type="button" className="btn btn-success btn-default btn-sm waves-effect waves-light">친구<i className="icon md-check" aria-hidden="true">  </i></button>
                  </div>
                  </td>
                  
                </tr>
                <tr>
                  <td>
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt />
                    <a href="#" className="user-link">George Clooney</a>
                    <span className="user-subhead">Member</span>
                  </td>
                  <td>
                    2013/08/12
                  </td>
                  <td className="text-center">
                    <span className="label label-success">Active</span>
                  </td>
                  <td>
                    <a href="#">marlon@brando.com</a>
                  </td>
                  <td style={{width: '20%'}}>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                    <a href="#" className="table-link danger">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                    <div class="pull-right">
                    <button type="button" class="btn btn-info btn-sm waves-effect waves-light">친구 추가</button>
                    </div>
                  </td>
                  
                </tr>
                <tr>
                  <td>
                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt />
                    <a href="#" className="user-link">Ryan Gossling</a>
                    <span className="user-subhead">Registered</span>
                  </td>
                  <td>
                    2013/03/03
                  </td>
                  <td className="text-center">
                    <span className="label label-danger">Banned</span>
                  </td>
                  <td>
                    <a href="#">jack@nicholson</a>
                  </td>
                  <td style={{width: '20%'}}>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                    <a href="#" className="table-link danger">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt />
                    <a href="#" className="user-link">Emma Watson</a>
                    <span className="user-subhead">Registered</span>
                  </td>
                  <td>
                    2004/01/24
                  </td>
                  <td className="text-center">
                    <span className="label label-warning">Pending</span>
                  </td>
                  <td>
                    <a href="#">humphrey@bogart.com</a>
                  </td>
                  <td style={{width: '20%'}}>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                    <a href="#" className="table-link danger">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt />
                    <a href="#" className="user-link">Robert Downey Jr.</a>
                    <span className="user-subhead">Admin</span>
                  </td>
                  <td>
                    2013/12/31
                  </td>
                  <td className="text-center">
                    <span className="label label-success">Active</span>
                  </td>
                  <td>
                    <a href="#">spencer@tracy</a>
                  </td>
                  <td style={{width: '20%'}}>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                    <a href="#" className="table-link danger">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt />
                    <a href="#" className="user-link">Mila Kunis</a>
                    <span className="user-subhead">Admin</span>
                  </td>
                  <td>
                    2013/08/08
                  </td>
                  <td className="text-center">
                    <span className="label label-default">Inactive</span>
                  </td>
                  <td>
                    <a href="#">mila@kunis.com</a>
                  </td>
                  <td style={{width: '20%'}}>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                    <a href="#" className="table-link danger">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt />
                    <a href="#" className="user-link">George Clooney</a>
                    <span className="user-subhead">Member</span>
                  </td>
                  <td>
                    2013/08/12
                  </td>
                  <td className="text-center">
                    <span className="label label-success">Active</span>
                  </td>
                  <td>
                    <a href="#">marlon@brando.com</a>
                  </td>
                  <td style={{width: '20%'}}>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                    <a href="#" className="table-link danger">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt />
                    <a href="#" className="user-link">Ryan Gossling</a>
                    <span className="user-subhead">Registered</span>
                  </td>
                  <td>
                    2013/03/03
                  </td>
                  <td className="text-center">
                    <span className="label label-danger">Banned</span>
                  </td>
                  <td>
                    <a href="#">jack@nicholson</a>
                  </td>
                  <td style={{width: '20%'}}>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                    <a href="#" className="table-link danger">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt />
                    <a href="#" className="user-link">Emma Watson</a>
                    <span className="user-subhead">Registered</span>
                  </td>
                  <td>
                    2004/01/24
                  </td>
                  <td className="text-center">
                    <span className="label label-warning">Pending</span>
                  </td>
                  <td>
                    <a href="#">humphrey@bogart.com</a>
                  </td>
                  <td style={{width: '20%'}}>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                    <a href="#" className="table-link danger">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt />
                    <a href="#" className="user-link">Robert Downey Jr.</a>
                    <span className="user-subhead">Admin</span>
                  </td>
                  <td>
                    2013/12/31
                  </td>
                  <td className="text-center">
                    <span className="label label-success">Active</span>
                  </td>
                  <td>
                    <a href="#">spencer@tracy</a>
                  </td>
                  <td style={{width: '20%'}}>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                    <a href="#" className="table-link danger">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x" />
                        <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="pagination pull-right">
            <li><a href="#"><i className="fa fa-chevron-left" /></a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#"><i className="fa fa-chevron-right" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

    );
  }
}
export default userlist;