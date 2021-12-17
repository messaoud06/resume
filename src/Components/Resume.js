import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}>
                  <h4>{education.degree}</h4>
                  <p className="info">{education.school} <span>&bull;</span>
                  <em className="date">{education.graduated}</em></p>
                  <p>{education.description}</p>
                </div>
      })


      var training = this.props.data.training.map(function(training){
        return <div key={training.school}>
                  <h4>{training.degree}</h4>
                  <p className="info">{training.school} <span>&bull;</span>
                  <em className="date">{training.graduated}</em></p>
                  <p>{training.description}</p>
                </div>
      })

      var work = this.props.data.work.map(function(work){
        return <div key={work.company}>
          <h4>{work.title}</h4>
            <p className="info">{work.company}<span>&bull;</span> 
            <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Training</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {training}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
