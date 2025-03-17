import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import users from './users.json';
import { 
  TextField, 
  Button, 
  Card, 
  CardContent, 
  Typography,
  IconButton,
  InputAdornment,
  Box,
  Divider
} from '@mui/material';
import { Person, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        navigate("/", { state: { role: user.role } });
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data. Please try again later.");
    }
  };

  

  // ...existing state code...

  return (
    <Box className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <Card elevation={3} className="w-full max-w-md bg-white rounded-xl">
        <CardContent className="p-8">
          {/* Logo/Brand Section */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
              <Lock className="text-white text-3xl" />
            </div>
            <Typography variant="h4" className="font-semibold text-gray-800">
              Welcome Back
            </Typography>
            <Typography variant="body2" className="text-gray-600 mt-2">
              Please sign in to your account
            </Typography>
          </div>

          <Divider className="my-6" />

          <form onSubmit={handleLogin} className="space-y-6">
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person className="text-gray-400" />
                  </InputAdornment>
                ),
                className: "bg-gray-50"
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock className="text-gray-400" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      className="text-gray-400"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                className: "bg-gray-50"
              }}
            />

            {error && (
              <Typography color="error" className="text-center text-sm bg-red-50 p-2 rounded">
                {error}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              className="bg-blue-600 hover:bg-blue-700 py-3 text-lg normal-case"
              sx={{
                boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
                textTransform: 'none'
              }}
            >
              Sign In
            </Button>

            <Typography variant="body2" className="text-center text-gray-500 mt-4">
              Forgot your password? <a href="#" className="text-blue-600 hover:text-blue-700">Reset it here</a>
            </Typography>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;