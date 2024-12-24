import { Grid, Box, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Box className="bg-gray-100 pt-24 p-5 min-h-screen">
      <Box className="text-center mb-8 bg-[url('/aboutUs.png')] h-screen bg-cover  bg-center">
        {/* <Typography variant="h3" fontWeight="bold">
          About Us
        </Typography>
        <Typography variant="body1" color="textSecondary" className="mt-2">
          Learn more about the Church of Pentecost and our journey in faith.
        </Typography> */}
      </Box>

      <section className="mb-10 flex flex-col gap-5">
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          className="text-blue-700"
        >
          History of the Church
        </Typography>
        <Typography variant="body1" color="textPrimary" paragraph>
          The Church of Pentecost began its mission in [YEAR], spreading the
          gospel and impacting communities across the globe. Over the years, it
          has grown into a dynamic movement with a rich history of faith,
          service, and dedication to the teachings of Christ.
        </Typography>
        <Typography variant="body1" color="textPrimary" paragraph>
          Milestones include [important event 1], [important event 2], and the
          establishment of [key achievement].
        </Typography>
      </section>

      {/* Leadership Team */}
      <section className="mb-10 flex flex-col gap-10">
        <Typography
          variant="h4"
          fontWeight="bold"
          className="text-blue-700"
          gutterBottom
        >
          Leadership Team
        </Typography>
        <Grid container spacing={4}>
          {/* Leader 1 */}
          <Grid item xs={12} md={4}>
            <Box className="bg-white shadow-md p-4 rounded-lg text-center ">
              <img
                src="leader1.jpg"
                alt="Pastor Name"
                className="w-24 h-24 mx-auto rounded-full mb-3"
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                className="text-blue-700"
              >
                Pastor John Doe
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Senior Pastor
              </Typography>
              <Typography variant="body2" color="textPrimary" className="mt-2">
                Pastor John has been leading the church since [YEAR], with a
                focus on [specific focus or ministry].
              </Typography>
            </Box>
          </Grid>

          {/* Leader 2 */}
          <Grid item xs={12} md={4}>
            <Box className="bg-white shadow-md p-4 rounded-lg text-center">
              <img
                src="leader2.jpg"
                alt="Elder Name"
                className="w-24 h-24 mx-auto rounded-full mb-3"
              />
              <Typography variant="h6" fontWeight="bold" >
                Elder Jane Smith
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Elder
              </Typography>
              <Typography variant="body2" color="textPrimary" className="mt-2">
                Elder Jane brings a wealth of experience in [specific area],
                serving the church faithfully since [YEAR].
              </Typography>
            </Box>
          </Grid>

          {/* Leader 3 */}
          <Grid item xs={12} md={4}>
            <Box className="bg-white shadow-md p-4 rounded-lg text-center">
              <img
                src="leader3.jpg"
                alt="Leader Name"
                className="w-24 h-24 mx-auto rounded-full mb-3"
              />
              <Typography variant="h6" fontWeight="bold">
                Deacon Peter Brown
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Deacon
              </Typography>
              <Typography variant="body2" color="textPrimary" className="mt-2">
                Deacon Peter oversees [responsibility], ensuring smooth
                operations and member engagement.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </section>

      <section className="mb-10">
        <Typography variant="h4" fontWeight="semiBold" gutterBottom>
          Core Beliefs and Doctrines
        </Typography>
        <ul className="list-disc pl-5 text-gray-700">
          <li className="mb-2">
            We believe in the triune God: the Father, the Son, and the Holy
            Spirit.
          </li>
          <li className="mb-2">
            We uphold the Bible as the inspired and infallible Word of God.
          </li>
          <li className="mb-2">
            Salvation is through faith in Jesus Christ, by grace, and not by
            works.
          </li>
          <li className="mb-2">
            The Church is called to evangelize the world and demonstrate the
            love of Christ.
          </li>
          <li className="mb-2">
            We value prayer, worship, and fellowship as essential elements of
            the Christian life.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <Typography
          variant="h4"
          fontWeight="semiBold"
          align="center"
          gutterBottom
        >
          Statistics
        </Typography>
        <Grid container justifyContent="center" spacing={8}>
          {[
            { label: "Current Members", count: 500 },
            { label: "True Members", count: 350 },
            { label: "Visitors", count: 150 },
            { label: "Total Members", count: 1000 },
          ].map((stat, index) => (
            <Grid item xs={6} sm={3} key={index} className="text-center">
              <Box className="w-24 h-24 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center mx-auto">
                <Typography variant="h5" fontWeight="bold">
                  {stat.count}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                color="textPrimary"
                className="mt-2 font-medium"
              >
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </section>

      <section className="mb-10">
        <Typography
          variant="h4"
          fontWeight="semiBold"
          align="center"
          gutterBottom
        >
          Meet Our Members
        </Typography>
        <Grid container spacing={4}>
          {[
            { name: "Alice Brown", role: "Choir Member", image: "member1.jpg" },
            { name: "David Green", role: "Youth Leader", image: "member2.jpg" },
            {
              name: "Sophia Lee",
              role: "Sunday School Teacher",
              image: "member3.jpg",
            },
          ].map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box className="bg-white shadow-md p-4 rounded-lg text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-3 object-cover"
                />
                <Typography variant="h6" fontWeight="bold">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {member.role}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </section>
    </Box>
  );
};

export default AboutUs;
