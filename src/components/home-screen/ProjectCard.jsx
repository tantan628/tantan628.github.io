import { ImageListItem, ImageListItemBar } from "@mui/material";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <ImageListItem key={project.id}>
            <img src={project.mainImage} alt={project.mainAltText} loading="lazy" />
            <ImageListItemBar
                title={project.name}
            />
            <ProjectModal open={open} handleClose={handleClose} project={project} />
        </ImageListItem>
    )
};

export default ProjectCard;