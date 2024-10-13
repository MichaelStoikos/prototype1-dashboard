import { Settings, Lock, MessageSquare, ShoppingBag, Users, BarChart2, Grid, PlusCircle } from 'lucide-react';
import './App.css'
import CityBudget from './components/cityBudget'
import EnergyConsumption from './components/energyConsumption'
import Services from './components/services'
import Departments from './components/departments'
import ServiceRequests from './components/serviceRequests'
import BXLogo from './assets/BXLogo.png'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';




function App() {

  return (
    <><div className='flex-container'>
        <div className='sideBar'>
            <div className='sideBar-Content'>
              <div className='logo'>
                <a href="#">
                  <img src={BXLogo} alt="logo bx" />
                  <h1>BrusselState</h1>
                </a>
              </div>
            <h3 className='category'>MENU</h3>
            <div className='menuCategories'>
              <div className='Link'>
                <Grid/>
                <a href="#"><h2>Overview</h2></a>
              </div>
              <div className='Link'>
                <BarChart2/>
                <a href="#"><h2>Statistics</h2></a>
              </div>
              <div className='Link'>
                <Users/>
                <a href="#"><h2>Customers</h2></a>
              </div>
              <div className='Link'>
                <ShoppingBag/>
                <a href="#"><h2>Product</h2></a>
              </div>
              <div className='Link'>
                <MessageSquare/>
                <a href="#"><h2>Messages</h2></a>
              </div>
              <div className='Link'>
                <ShoppingBag/>
                <a href="#"><h2>Transactions</h2></a>
              </div>
              <h3 className='category'>GENERAL</h3>
              <div className='Link'>
                <Settings/>
                <a href="#"><h2>Settings</h2></a>
              </div>
              <div className='Link'>
                <Lock/>
                <a href="#"><h2>Security</h2></a>
              </div>
            </div>
          </div>
        </div>
        <div className='overviewPage'>

          {/*<CityBudget />
          <EnergyConsumption />
          <Services />
          <ServiceRequests />
          <Departments />*/}
        </div>
      </div>
    </>
  )
}

export default App
