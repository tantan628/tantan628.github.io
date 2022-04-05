import { Box, Modal, Typography } from "@mui/material";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgsolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};

const ProjectModal = ({ open, handleClose, project }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={modalStyle}>
                <Typography variant="h4">
                    {project.name}
                </Typography>
                <Typography variant="subtitle2">
                    {project.shortSummary}
                </Typography>
                <Typography>
                    Placeholder for link.
                </Typography>
            </Box>
        </Modal>
    )
};

export default ProjectModal;