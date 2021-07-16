

const Resume = ({ data }) => {

    if (data) {
        var skillmessage = data.skillmessage;
        var education = data.education.map(function (education) {
          return (
            <div key={education.school}>
              <h1 className="font-bold text-2xl font-OpenSansBold mb-3">{education.school}</h1>
              <p className="text-md font-librebaskervilleItalic text-textLight">
                {education.degree} <span>&bull;</span> 
                <em className="date">{education.graduated}</em>
              </p>
            </div>
          );
        });
        var work = data.work.map(function (work) {
          return (
            <div key={work.company} className="space-y-3">
              <h1 className="font-bold text-2xl font-OpenSansBold">{work.company}</h1>
              <p className="text-md font-librebaskervilleItalic text-textLight">
                {work.title} , <span>&bull;</span> <em className="date">{work.years}</em>
              </p>
              <p className="text-textLight">{work.description}</p> 
            </div>
          );
        });
        var skills = data.skills.map(function (skills) {
          var className = "bar-expand " + skills.name.toLowerCase();
          return (
            <div key={skills.name}>
                <em className="mb-14 leading-9 tracking-widest font-bold text-lg">{skills.name}</em>
                <li className="relative mb-7 bg-coffeeLight h-11 rounded">
                    <span className={`absolute inset-0 bg-coffee h-11 rounded-bl rounded-tl ${className}`} style={{ width: skills.level }}></span>
                </li>
            </div>
          );
        });
      }

    return (
        <div className="bg-white p-7 py-24 flex flex-col items-center space-y-12 md:p-10 lg:p-28" id="resume">
            
            <div className="flex flex-col items-center space-y-10 md:space-y-0 md:grid grid-cols-2 w-10/12 md:w-full md:-space-x-20 md:justify-items-start border-b border-borderLight pb-20">
                <div className="md:w-1/6 flex items-center md:mb-6">
                    <h1 className="border-b-2 border-solid border-green-500 leading-9 tracking-widest font-bold text-lg">EDUCATION</h1>
                </div>
                <div className="flex flex-col text-center md:text-left space-y-3 md:space-y-5">
                    {education}
                </div>
            </div>


            <div className="flex flex-col items-center space-y-10 md:space-y-0 md:grid grid-cols-2 w-10/12 md:w-full md:-space-x-20 border-b border-borderLight pb-16">
                <div className="md:w-1/6 flex items-center md:mb-32">
                    <h1 className="border-b-2 border-solid border-green-500 leading-9 tracking-widest font-bold text-lg">WORK</h1>
                </div>
                <div className="flex flex-col text-center space-y-2 md:text-left max-w-sm h-full">
                    {work}
                </div>
            </div>


            <div className="flex flex-col items-center space-y-10 md:space-y-0 md:grid grid-cols-2 w-10/12 md:w-full md:-space-x-20">
                <div className="md:w-1/6 flex items-center md:mb-mbc md:-mt-24">
                    <h1 className="border-b-2 border-solid border-green-500 leading-9 tracking-widest font-bold text-lg">SKILLS</h1>
                </div>
                <div className="flex flex-col space-y-7 md:space-y-0">
                    <p className="font-bold text-md font-librebaskervilleItalic text-textLight">{skillmessage}</p>

                    <ul className="relative">
                        {skills}
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Resume
