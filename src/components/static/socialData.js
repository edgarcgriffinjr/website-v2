import React from "react"
import * as FaIcons from "react-icons/fa"
import * as MdIcons from "react-icons/md"

export const Social = [
  {
    id: 1,
    icon: <FaIcons.FaLinkedin className = "social-icon" />,
    url: "https://www.linkedin.com/in/edgarcgriffinjr/",
  },
  {
    id: 2,
    icon: <FaIcons.FaGithubSquare className = "social-icon" />,
    url: "https://github.com/edgarcgriffinjr",
  },
  {
    id: 3,
    icon: <FaIcons.FaInstagramSquare className = "social-icon" />,
    url: "https://www.instagram.com/edgarcgriffin/",
  },
  {
    id: 4,
    icon: <MdIcons.MdEmail className = "social-icon" />,
    url: "mailto: edgarcgriffinjr@gmail.com",
  }
]
