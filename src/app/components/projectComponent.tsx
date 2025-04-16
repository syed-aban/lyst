import React, { useState } from 'react';

interface ProjectComponentProps {
  title: string;
  task: string;
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({ title, task}) => {
  const [componentShadow, setComponentShadow] = useState("5px 5px orange");

  const handleShadowChange = (size: number) => {
    if(size === 10) {
      setComponentShadow("15px 15px orange");
    } else {
      setComponentShadow("5px 5px orange");
    }
  };

  return (
    <div className="card w-full h-50 flex flex-col justify-between items-center transition-all duration-200 ease-in-out p-3 rounded-sm"
      style={{
        backgroundColor: "lime",
        boxShadow: componentShadow,
      }}
      onMouseEnter={() => handleShadowChange(10)}
      onMouseLeave={() => handleShadowChange(5)}
    >
      <div className='text-5xl font-black text-black'>
          {title}
      </div>
      <div className='text-4xl text-black'>
        {task}
      </div>
      <div>
        <button className="btn text-2xl"
          onClick={() => {}} // create a util called deleteProject so you can delete the project
        >
          👎
        </button>
      </div>
    </div>
  );
};

export default ProjectComponent;