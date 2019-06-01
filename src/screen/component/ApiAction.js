import {
  BASEURL
} from '../../util/AppContsant';


export const getRepositories = () =>{
  console.log(BASEURL +'users/supreetsingh247/repos');
  return fetch(BASEURL+'users/supreetsingh247/repos', {
   method:'GET'
  })
  .then((response)=>response.json());
}