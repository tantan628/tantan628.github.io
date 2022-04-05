//IMPORTS - Mui
import { Link, Typography } from "@mui/material";

//IMPORTS - Components
import ProjectList from "./ProjectList";

//----------COMPONENT----------
const Home = () => {
    return (
        <div>
        <section>
            <Typography variant="body1">
                Hi, I am a junior developer recently graduated from Northcoders' Bootcamp. On the course I gained a solid understanding of the fundamentals of software development alongside building a wealth of experience with development tools. I have also had experience working on both front and back end, as well as working solo, pair-programming, and as part of an agile team.
            </Typography>
            <Typography variant="body1">
                I am currently looking for work as a junior software developer to continue in this exciting new career. If you have a position you believe I may be suitable for, you can find my contact details above and you can find my current CV
            </Typography>
            <Link href="https://drive.google.com/file/d/107xIFGyF1ewfx9VL9QaIqM2eMoRdSUtG/view?usp=sharing" underline="always">
                here.
            </Link>
        </section>
        <ProjectList />
        </div>
    )
};

export default Home;