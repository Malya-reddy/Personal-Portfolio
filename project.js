const projects = [
  {
    title: "Smart Traffic Monitor",
    overview: "An AI-powered system for real-time traffic monitoring and violation detection using computer vision.",
    features: [
      "Real-time vehicle detection using YOLOv8",
      "Traffic density analysis and vehicle counting",
      "Violation detection (lane crossing, signal jumping)",
      "Timestamp-based logging system"
    ],
    flow: [
      "Capture video from camera",
      "Convert video into frames using OpenCV",
      "Detect vehicles using YOLOv8",
      "Analyze traffic & detect violations",
      "Store results with timestamps"
    ],
    tech: "Python, OpenCV, YOLOv8, PyTorch"
  },

  {
    title: "EduAdapt AI",
    overview: "An AI-based adaptive learning platform that personalizes content based on student performance.",
    features: [
      "Personalized learning paths",
      "Performance-based difficulty adjustment",
      "Knowledge tracking using ML",
      "Dynamic quiz generation"
    ],
    flow: [
      "Collect student interaction data",
      "Analyze learning patterns using ML",
      "Predict knowledge level",
      "Adapt content dynamically",
      "Improve learning using feedback loop"
    ],
    tech: "Python, Machine Learning, Reinforcement Learning"
  },

  {
    title: "HouseHunt",
    overview: "A web application to search and explore houses with advanced filtering and responsive UI.",
    features: [
      "Search houses by location & price",
      "Dynamic filtering system",
      "Responsive design",
      "User-friendly interface"
    ],
    flow: [
      "Load property data",
      "User selects filters",
      "Apply filtering logic",
      "Display results dynamically"
    ],
    tech: "HTML, CSS, JavaScript"
  },

  {
    title: "SRIT Clone Website",
    overview: "A responsive clone of SRIT college website replicating layout and design.",
    features: [
      "Fully responsive layout",
      "Navigation system",
      "Structured content sections",
      "Modern UI design"
    ],
    flow: [
      "Analyze original website",
      "Design layout using HTML/CSS",
      "Add responsiveness",
      "Enhance UI using JavaScript"
    ],
    tech: "HTML, CSS, JavaScript"
  }
];

function openProject(index){
  localStorage.setItem("project", JSON.stringify(projects[index]));
  window.location.href = "project.html";
}