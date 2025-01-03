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
      <div className="w-full h-full max-w-full max-h-full relative overflow-hidden px-3 sm:px-3 md:px-5 lg:px-10 py-3 sm:py-5 md:pt-3 lg:py-5">
        <img
          src="/aboutUs.png"
          alt="announcement image"
          className="w-full h-full rounded-3xl object-cover"
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
          The Church of Pentecost, founded by Irish missionary Pastor James
          McKeown in 1937, emerged in Ghana after a split from the Apostolic
          Church due to doctrinal differences. Initially named the Gold Coast
          Apostolic Church, it was renamed in 1962 upon the advice of President
          Dr. Kwame Nkrumah. McKeown&apos;s leadership saw the church grow
          globally, transitioning to indigenous leadership in 1982 under Rev.
          Fred S. Sarfo. Today, it operates in over 170 countries with 4.2
          million members, emphasizing evangelism, discipleship, and community
          development.
        </Typography>
        {isReadMore? }
      </section>

      <section className="mb-10 flex flex-col gap-10">
        <h2 className="text-2xl font-bold text-blue-700">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LeaderShip.map((leader, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg text-center"
              onClick={() => handleOpenModal(leader.image)}
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-60 h-60 mx-auto rounded-full mb-4 object-cover cursor-pointer"
              />
              <h3 className="text-lg font-bold text-blue-700">{leader.name}</h3>
              <p className="text-gray-500">{leader.title}</p>
              <p className="text-gray-700 mt-2">{leader.description}</p>
            </div>
          ))}
        </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 cursor-pointer">
          {memberShip.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg text-center cursor-pointer"
              onClick={() => handleOpenModal(member.image)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-64 h-64 mx-auto rounded-full mb-4 object-cover"
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
