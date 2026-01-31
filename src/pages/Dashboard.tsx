import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Package, Heart, Settings, LogOut, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const Dashboard = () => {
  const menuItems = [
    { icon: User, label: 'Profile', href: '#', description: 'Manage your personal information' },
    { icon: Package, label: 'Orders', href: '#', description: 'Track and manage your orders' },
    { icon: Heart, label: 'Wishlist', href: '#', description: 'Your saved items' },
    { icon: Settings, label: 'Settings', href: '#', description: 'Account preferences' },
  ];

  const recentOrders = [
    { id: 'AS-001234', product: 'Aether Zero Gravity', status: 'Shipped', date: 'Jan 28, 2024' },
    { id: 'AS-001198', product: 'Custom Eclipse', status: 'Delivered', date: 'Jan 15, 2024' },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p className="text-label mb-2">Welcome back</p>
              <h1 className="text-4xl md:text-5xl font-display font-light tracking-tight">
                Your <span className="text-gradient-gold">Dashboard</span>
              </h1>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-xl font-display font-medium mb-4">Quick Actions</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {menuItems.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex items-center gap-4 p-6 bg-secondary border border-border rounded-sm hover:border-accent/50 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 bg-background border border-border rounded-sm flex items-center justify-center group-hover:border-accent/50 transition-colors duration-300">
                          <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium mb-1 group-hover:text-accent transition-colors duration-300">
                            {item.label}
                          </h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Recent Orders */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-xl font-display font-medium mb-4">Recent Orders</h2>
                  <div className="bg-secondary border border-border rounded-sm overflow-hidden">
                    {recentOrders.map((order, index) => (
                      <div
                        key={order.id}
                        className={`flex items-center justify-between p-6 ${
                          index !== recentOrders.length - 1 ? 'border-b border-border' : ''
                        }`}
                      >
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{order.id}</p>
                          <p className="font-medium">{order.product}</p>
                        </div>
                        <div className="text-right">
                          <span
                            className={`inline-block px-3 py-1 text-xs rounded-full ${
                              order.status === 'Shipped'
                                ? 'bg-accent/20 text-accent'
                                : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            {order.status}
                          </span>
                          <p className="text-sm text-muted-foreground mt-1">{order.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Account Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-secondary border border-border rounded-sm p-6"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-background border border-border rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-display font-medium">Guest User</p>
                      <p className="text-sm text-muted-foreground">Member since 2024</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Loyalty Points</span>
                      <span className="text-accent">2,450</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Member Tier</span>
                      <span className="text-foreground">Gold</span>
                    </div>
                  </div>
                </motion.div>

                {/* Logout */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    to="/"
                    className="flex items-center justify-center gap-2 w-full p-4 border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-colors duration-300"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm">Sign Out</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Dashboard;
