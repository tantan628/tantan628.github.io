import { Box, imageListItemClasses, Link, Typography } from "@mui/material";

import ProjectCard from "./ProjectCard";

const projects = [
    {
        id: 1,
        name: "News API",
        shortSummary: "An Express server using pSQL to serve data.",
        projectLink: "https://github.com/tantan628/newsAPI",
        hostingLink: "https://tanisnewsapi.herokuapp.com",
        mainImage: "https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        mainAltText: "A placeholder showing a woman on a maptop",
        slideshowImages: ["image1URL", "image2URL", "image3URL"]
    },
    {
        id: 2,
        name: "News Front End",
        shortSummary: "A React based front-end using the News API back-end",
        projectLink: "https://github.com/tantan628/NC-news",
        hostingLink: "https://tanis-nc-news.netlify.app/",
        mainImage: "https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        slideshowImages: ["image1URL", "image2URL", "image3URL"]
    }
]

const ProjectList = () => {
    let imageList = projects.map((project) => {
        return <ProjectCard project={project} key={project.id} />
    });

    return (
        <Box>
            <Typography variant="h3">
                Projects
            </Typography>
            <Box
                sx={{
                    display:"grid",
                    gridTemplateColumns: {
                        mobile: "repeat(1, 1fr)",
                        bigMobile: "repeat(2, 1fr)",
                        tablet: "repeat(3, 1fr)",
                        desktop: "repeat(4, 1fr)"
                    },
                    [`& .${imageListItemClasses.root}`]: {
                        display: "flex",
                        flexDirection: "column"
                    }
                }}
            >
                {imageList}
            </Box>
        </Box>
    )
};

export default ProjectList;