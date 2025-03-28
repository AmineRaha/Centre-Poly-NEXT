import { Button } from "@mui/material"
import { motion } from "framer-motion";

const FilterButton = ({text, tag, handleFilterClick, selectedFilter}) => {

  const childElementVariants = {

    visible: { 
        y: [50,0],
        opacity:[0,1],
        transition: {
        duration: 0.5,
    },
},
};

  return (
    <Button variant={selectedFilter === tag ? 'contained' : 'outlined' } onClick={() => handleFilterClick(tag)} sx={{pointerEvents:selectedFilter === tag ? 'none' : 'auto'}} component={motion.div} variants={childElementVariants}>{text}</Button>
  )
}

export default FilterButton