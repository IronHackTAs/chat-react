import React,{Component} from 'react';
import axios from 'axios';
import { ProjectItem } from './ProjectItem';
import { SingleProjectLoader } from './SingleProjectLoader';

export class ListProjectLoader extends Component {
    constructor(){
        super();
        this.state = {
            projects: null,
            loading: true
        }
    }
    
    componentWillMount(){
        this.refetchAll();
    }

    refetchAll(){
        let url = `http://localhost:3010/api/projects/`;
        console.log(url);
        axios.get(url)
             .then(res => {
                 console.log(res.data);
                 this.setState({projects: res.data, loading: false});
             })
             .catch(e =>  console.log("EROOR PIDIENDO PROYECTO"));
    }

    render(){
        let {projects, loading} = this.state;
        if(!loading){
            return (
                <div>
                    <button onClick={()=> this.refetchAll()}>Reload projects</button>
                    {projects.map(project => (
                        <SingleProjectLoader 
                            key={project._id} 
                            project={project}
                            editable 
                            />
                    ))}
                </div>
            )
        }else{
            return <p>Loading...</p>
        }
    }
}

