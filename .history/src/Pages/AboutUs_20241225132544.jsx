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
];

const memberShip = [
  {
    image: "/member1.jpg",
    name: "Member One",
    title: "Member Title",
    description: "Description about the member goes here.",
  },
  {
    image: "/member2.jpg",
    name: "Member Two",
    title: "Member Title",
    description: "Description about the member goes here.",
  },
  {
    image: "public/member2.jpg",
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

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImage("");
  };

  return (
    <Box className="bg-gradient-to-br from-gray-200 via-blue-100 to-blue-200 min-h-screen pt-24 p-5">
      <div className="w-full max-w-full h-screen relative overflow-hidden px-10 py-10">
        <img
          src="/aboutUs.png"
          alt="announcement image"
          className="w-full h-full rounded-3xl object-cover shadow-lg"
        />
      </div>

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
          The Church of Pentecost began its mission in [YEAR], spreading the
          gospel and impacting communities across the globe...
        </Typography>
      </section>

      <section className="mb-12">
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          className="text-blue-800 ml-10"
        >
          Core Beliefs and Doctrines
        </Typography>
        <ul className="pl-5 text-gray-700 text-lg space-y-4">
          {belief.map((belief, index) => (
            <li key={index} className="flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-blue-800 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
              {belief}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          className="text-blue-800"
          gutterBottom
        >
          Statistics
        </Typography>
        <Grid container justifyContent="center" spacing={4}>
          {membersStatistics.map((stat, index) => (
            <Grid item xs={6} sm={3} key={index} className="text-center">
              <Box className="w-36 h-36 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center mx-auto">
                <Typography variant="h5" fontWeight="bold">
                  {stat.count}
                </Typography>
              </Box>
              <Typography
                variant="h6"
                color="textPrimary"
                className="mt-2 font-medium"
              >
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </section>

      <section className="mb-12">
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          className="text-blue-800"
          gutterBottom
        >
          Meet Our Members
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {memberShip.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg text-center cursor-pointer"
              onClick={() => handleOpenModal(member.image)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-60 h-60 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-blue-800">{member.name}</h3>
              <p className="text-gray-500">{member.title}</p>
              <p className="text-gray-700 mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Image Viewer</DialogTitle>
        <DialogContent>
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full h-auto object-contain"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AboutUs;
