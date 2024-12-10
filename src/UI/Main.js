import React, { useEffect,  useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Box,
  IconButton,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  LinearProgress,
  Avatar,
  Chip,
  Fade,
  Tooltip,
} from '@mui/material';
import {
  CheckCircle,
  School,
  Assessment,
  TrendingUp,
  Group,
  AccountCircle,
  VideoLibrary,
  LibraryBooks,
  EmojiEvents,
  Timeline,
  CalendarToday,
} from '@mui/icons-material';
import { styled } from '@mui/system';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip as ChartTooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, ChartTooltip, Legend);

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
}));

const HeroSection = styled('div')(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: '#fff',
  padding: '120px 20px',
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
  overflow: 'hidden',
  boxShadow: '0px 15px 30px rgba(0,0,0,0.3)',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23ffffff\' fill-opacity=\'0.1\' d=\'M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    opacity: 0.6,
    zIndex: -1,
  },
}));

const CardStyled = styled(Card)(({ theme }) => ({
  marginBottom: '30px',
  padding: '30px',
  borderRadius: '20px',
  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  },
}));

const CallToAction = styled('div')(({ theme }) => ({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  padding: '60px 40px',
  borderRadius: '15px',
  textAlign: 'center',
  marginTop: '50px',
  color: '#fff',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
  transition: '0.4s',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
  },
}));

const Footer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: '40px',
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  color: '#fff',
}));

const AchievementBadge = styled(Avatar)(({ theme }) => ({
  backgroundColor: '#FFD700',
  width: theme.spacing(7),
  height: theme.spacing(7),
  margin: theme.spacing(1),
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
}));

export default function EnhancedLearningOutcomesDashboard() {
  const [chartData, setChartData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Student Performance',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: '#2575fc',
        borderColor: '#6a11cb',
        tension: 0.4,
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Student Performance Overview',
      },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setChartData(prevData => ({
        ...prevData,
        datasets: [{
          ...prevData.datasets[0],
          data: [65, 59, 80, 81, 56, 70],
        }],
      }));
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <AppBarStyled position="sticky">
        <Toolbar>
          <School sx={{ mr: 2 }} />
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            LMS Dashboard
          </Typography>
          <Button color="inherit" startIcon={<Assessment />}>Analytics</Button>
          <Button color="inherit" startIcon={<VideoLibrary />}>Courses</Button>
          <Button color="inherit" startIcon={<Group />}>Community</Button>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBarStyled>

      <HeroSection>
        <Fade in timeout={1000}>
          <div>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Empower Your Learning Journey
            </Typography>
            <Typography variant="h5" gutterBottom>
              Track progress, achieve goals, and unlock your potential
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 3,
                padding: '15px 40px',
                fontWeight: 'bold',
                backgroundColor: '#ffffff',
                color: '#6a11cb',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              Start Your Journey
            </Button>
          </div>
        </Fade>
      </HeroSection>

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <CardStyled>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  User Profile
                </Typography>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar sx={{ width: 60, height: 60, mr: 2 }}>JD</Avatar>
                  <Box>
                    <Typography variant="h6">John Doe</Typography>
                    <Typography variant="body2" color="textSecondary">Educator</Typography>
                  </Box>
                </Box>
                <Chip icon={<CalendarToday />} label="Last Login: 1 hour ago" sx={{ mt: 1 }} />
              </CardContent>
            </CardStyled>
          </Grid>
          <Grid item xs={12} md={8}>
            <CardStyled>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Performance Overview
                </Typography>
                <Line data={chartData} options={chartOptions} />
              </CardContent>
            </CardStyled>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <CardStyled>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Upcoming Assignments
                </Typography>
                <List>
                  {[
                    { icon: <LibraryBooks />, text: "Math Homework - Due: 10/05/2024" },
                    { icon: <Assessment />, text: "Science Project - Due: 10/10/2024" },
                    { icon: <Timeline />, text: "History Essay - Due: 10/15/2024" },
                  ].map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </CardStyled>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardStyled>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Course Progress
                </Typography>
                {[
                  { course: "Mathematics", progress: 75, color: "#4CAF50" },
                  { course: "Science", progress: 60, color: "#FFC107" },
                  { course: "History", progress: 90, color: "#2196F3" },
                ].map((item, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Box display="flex" justifyContent="space-between" mb={1}>
                      <Typography variant="body1">{item.course}</Typography>
                      <Typography variant="body2">{item.progress}%</Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={item.progress} 
                      sx={{ 
                        height: 10, 
                        borderRadius: 5,
                        backgroundColor: `${item.color}40`,
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 5,
                          backgroundColor: item.color,
                        }
                      }} 
                    />
                  </Box>
                ))}
              </CardContent>
            </CardStyled>
          </Grid>
        </Grid>

        <CardStyled>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Recent Achievements
            </Typography>
            <Box display="flex" justifyContent="center" flexWrap="wrap">
              {[
                { icon: <EmojiEvents />, title: "Top Performer" },
                { icon: <CheckCircle />, title: "Course Completed" },
                { icon: <TrendingUp />, title: "Consistent Improver" },
              ].map((achievement, index) => (
                <Tooltip key={index} title={achievement.title} arrow>
                  <AchievementBadge>
                    {achievement.icon}
                  </AchievementBadge>
                </Tooltip>
              ))}
            </Box>
          </CardContent>
        </CardStyled>

        <CallToAction>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Ready to Take Your Learning to the Next Level?
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              mt: 2, 
              backgroundColor: '#ffffff', 
              color: '#FE6B8B',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              }
            }}
          >
            Explore Advanced Courses
          </Button>
        </CallToAction>
      </Container>

      <Footer>
        <Typography variant="body1">&copy; 2024 Your LMS. All Rights Reserved.</Typography>
        <Box mt={2}>
          <IconButton color="inherit"><School /></IconButton>
          <IconButton color="inherit"><Assessment /></IconButton>
          <IconButton color="inherit"><Group /></IconButton>
        </Box>
      </Footer>
    </div>
  );
}