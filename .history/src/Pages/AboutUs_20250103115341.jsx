import {
  Grid,
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { useState } from "react";


const LeaderShip = [
  {
    image: "/Elder Dan.jpg",
    name: "Pastor John Doe",
    title: "Senior Pastor",
    description:
      "Pastor John has been leading the church since [YEAR], with a focus on [specific focus or ministry].",
  },
  {
    image: "/Elder Banor.jpg",
    name: "Elder Jane Smith",
    title: "Elder",
    description:
      "Elder Jane brings a wealth of experience in [specific area], serving the church faithfully since [YEAR].",
  },
  {
    image: "/Elder Ashanti.jpg",
    name: "Deacon Peter Brown",
    title: "Deacon",
    description:
      "Deacon Peter oversees [responsibility], ensuring smooth operations and member engagement.",
  },
  {
    image: "/Deaconess_Fabri_Janet.jpg",
    name: "Deaconess Fabri Yeboah",
    title: "Choir Madam",
    description:
      "Deaconess Fabri Yeboah oversees [responsibility], ensuring smooth operations and member engagement.",
  },
  {
    image: "/Deaconess.jpg",
    name: "Deacon Peter Brown",
    title: "Deacon",
    description:
      "Deacon Peter oversees [responsibility], ensuring smooth operations and member engagement.",
  },
  {
    image: "/Retired Officer.jpg",
    name: "Deacon Peter Brown",
    title: "Deacon",
    description:
      "Deacon Peter oversees [responsibility], ensuring smooth operations and member engagement.",
  },
];

const memberShip = [
  {
    image: "/member1.jpg",
    name: "Member One",
    title: "Member Title",
    description: "Description about the member goes here.",
  },
  {
    image: "/Madam Sisi.jpg",
    name: "Member Two",
    title: "Member Title",
    description: "Description about the member goes here.",
  },
  {
    image: "/member3.jpg",
    name: "Member Three",
    title: "Member Title",
    description: "Description about the member goes here.",
  },
];

const membersStatistics = [
  { label: "Current Members", count: 500 },
  { label: "True Members", count: 350 },
  { label: "Visitors", count: 150 },
  { label: "Total Members", count: 1000 },
];

const belief = [
  "We believe in the triune God: the Father, the Son, and the Holy Spirit.",
  "We uphold the Bible as the inspired and infallible Word of God.",
  "Salvation is through faith in Jesus Christ, by grace, and not by works.",
  "The Church is called to evangelize the world and demonstrate the love of Christ.",
  "We value prayer, worship, and fellowship as essential elements of the Christian life.",
];



const AboutUs = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
const [readMore, setReadMore] = useState("false");

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImage("");
  };

  return (
    <Box className="bg-gradient-to-br from-gray-200 via-blue-100 to-blue-200 min-h-screen p-5">
      <section className="mb-12">
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          className="text-blue-800"
        >
          History of the Church
        </Typography>
        <Typography variant="body1" color="textPrimary" paragraph>
          The Church of Pentecost, founded by Irish missionary Pastor James
          McKeown in 1937, emerged in Ghana after a split from the Apostolic
          Church due to doctrinal differences. Initially named the Gold Coast
          Apostolic Church, it was renamed in 1962 upon the advice of President
          Dr. Kwame Nkrumah.
        </Typography>
        {!readMore && (
          <Typography variant="body1" color="textPrimary" paragraph>
            McKeown&apos;s leadership saw the church grow globally,
            transitioning to indigenous leadership in 1982 under Rev. Fred S.
            Sarfo. Today, it operates in over 170 countries with 4.2 million
            members, emphasizing evangelism, discipleship, and community
            development.
          </Typography>
        )}
        {readMore && (
          <Typography variant="body1" color="textPrimary" paragraph>
            The Church of Pentecost (COP) is a Pentecostal Christian
            denomination that originated in Ghana. Here&apos;s a brief history:
            <br />
            <strong>Early Beginnings (1920s-1930s):</strong> The Church of
            Pentecost has its roots in the Apostolic Faith Mission, a
            Pentecostal movement that emerged in the United States in the early
            20th century. In the 1920s, missionaries from the Apostolic Faith
            Mission arrived in the Gold Coast (now Ghana), preaching the gospel
            and establishing churches.
            <br />
            <strong>Founding and Growth (1930s-1950s):</strong> In 1937, James
            McKeown, a British missionary, and Peter Anim, a Ghanaian
            evangelist, founded the Gold Coast Apostolic Church. The church grew
            rapidly, and by the 1950s, it had become one of the largest
            Pentecostal denominations in Ghana.
          </Typography>
        )}
        <Button onClick={toggleReadMore} color="primary" variant="contained">
          {readMore ? "Read Less" : "Read More"}
        </Button>
      </section>
    </Box>
  );
};

export default AboutUs;
