import React, { Component } from 'react'
import {Stack,Form, Button, gap} from 'react-bootstrap'
import phot from './images/woody.jpg' 


class Profile extends Component {
    render() {
        return (
 <div>
 <blockquote className="blockquote" style={{margin:"30px"}} >
  <p class="mb-0">Woody Allen, original name Allen Stewart Konigsberg, legal name HeywoodAllen, (born December 1, 1935, Brooklyn, New York, U.S.), American motion-picture director, screenwriter, actor, comedian, playwright, and author, best known for his bittersweet comic films containing elements of parody, slapstick, and the absurd but who also made weighty dramas, often with dark themesAllen was also known as a sympathetic director for women, writing strong and well-defined characters for them. By the late 1970s he was widely regarded as one of the world’s most-accomplished filmmakers, personlly i really recommand watching one of his movies ..</p>
  <footer class="blockquote-footer">He's really the best  <cite title="Source Title">  britannica.com</cite></footer>
</blockquote>



 <Stack direction="horizontal" gap={3}>
  <Form.Control className="me-auto" placeholder="Please, add your review about my first React app  " />
  <Button variant="secondary">Submit</Button>
  <div className="vr" />
  <Button variant="outline-danger">Reset</Button>
</Stack>
<img src={phot} alt="Logo" style={{margin:"20px", height:"380px", width:"540px"}} />

 </div>
     )
    }
}
export default Profile