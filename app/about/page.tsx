import { hobbies } from "@/content/hobbies"

export default function Page() {
  return (
    <main>
      <h1>About Me</h1>
      <h3>
        I'm a University of Michigan graduate with a passion for software engineering. I have a bachelor's degree in Computer Science and a minor in 
        Mathematics. My interests lie in backend and full stack development, where I enjoy building scalable systems and optimizing performance.
        I also have experience in machine learning, computer vision, and game development.
      </h3>
      <h3>
        What I'm currently interested in:
      </h3>
      <ul>
        <li>Building scalable and efficient backend systems</li>
        <li>Full stack web development</li>
        <li>System performance and optimization</li>
        <li>Cloud computing and distributed systems</li>
      </ul>
      <h3>
        Feel free to explore my <a href="/skills">skills</a> and <a href="/projects">projects</a> to learn more about my work and expertise.
      </h3>
      <h3>
        Outside of programming, I enjoy:
      </h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby.name}>{hobby.name}</li>
        ))}
      </ul>
    </main>
  )
}
