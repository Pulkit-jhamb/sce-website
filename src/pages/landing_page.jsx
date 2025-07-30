import { useState } from 'react';
import { 
    Mail, 
    Phone, 
    MapPin, 
    Heart, 
    Users, 
    Lightbulb, 
    Shield, 
    Globe,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    Send,
    ChevronDown,
    Menu,
    X
} from 'lucide-react';

export default function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [emailForm, setEmailForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [donationAmount, setDonationAmount] = useState('');

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        // Handle email submission logic here
        console.log('Email form submitted:', emailForm);
        alert('Thank you for your message! We will get back to you soon.');
        setEmailForm({ name: '', email: '', subject: '', message: '' });
    };

    const handleDonation = (e) => {
        e.preventDefault();
        // Handle donation logic here
        console.log('Donation amount:', donationAmount);
        alert('Thank you for your donation! We appreciate your support.');
        setDonationAmount('');
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-stone-50">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <h1 className="text-2xl font-bold text-black">SCE</h1>
                            </div>
                        </div>
                        
                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</button>
                                <button onClick={() => scrollToSection('about-project')} className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors">About Project</button>
                                <button onClick={() => scrollToSection('about-us')} className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors">About Us</button>
                                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</button>
                                <button onClick={() => scrollToSection('support')} className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors">Support</button>
                                <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors">FAQ</button>
                                <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors">Team</button>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-black">
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium">Home</button>
                            <button onClick={() => scrollToSection('about-project')} className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium">About Project</button>
                            <button onClick={() => scrollToSection('about-us')} className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium">About Us</button>
                            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium">Contact</button>
                            <button onClick={() => scrollToSection('support')} className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium">Support</button>
                            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium">FAQ</button>
                            <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium">Team</button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}

            
            <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-8">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Society of <span className="text-black">Community</span> Engineering
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Bridging the gap between technical knowledge and societal needs. 
                            We solve real-world problems through innovative engineering solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onClick={() => scrollToSection('contact')} className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                                Get Help Now
                            </button>
                            <button onClick={() => scrollToSection('support')} className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors">
                                Support Our Mission
                            </button>
                        </div>
                    </div>
                    
                    
                    {/* Stats
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <Users className="w-12 h-12 text-black mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900">25+</h3>
                            <p className="text-gray-600">Women Helped</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <Lightbulb className="w-12 h-12 text-black mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900">10+</h3>
                            <p className="text-gray-600">Projects Completed</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <Globe className="w-12 h-12 text-black mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900">1</h3>
                            <p className="text-gray-600">City Impacted</p>
                        </div>
                    </div> */}
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div> 
                
            </section> 
            {/* About Project Section */}
            <section id="about-project" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <br /><br /><br />
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Our Project</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Addressing menstrual waste disposal challenges in rural India through innovative engineering solutions.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Challenge</h3>
                            <div className="space-y-4 text-gray-600">
                                <p>Access to proper menstrual waste disposal remains a significant challenge in many parts of India, especially in rural areas where taboos and lack of waste management solutions make disposal even harder.</p>
                                <p>In Ludhiana, an orphanage housing 25 young women has been struggling with this issue for years. Due to social stigma, waste collectors refuse to handle sanitary pads, forcing the orphanage associates to travel 10 km just to dispose of them—often in abandoned plots or farmlands.</p>
                                <p>In nearby villages, the common practice is to bury used pads, which is neither safe nor hygienic.</p>
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-amber-50 to-stone-50 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Solution</h3>
                            <div className="space-y-4 text-gray-600">
                                <p>After visiting the site and understanding their struggles, our team—a group of seven dedicated engineering students, with guidance from our faculty—decided to take action.</p>
                                <p>We are now working on developing a sanitary pad incinerator from scratch, tailored to their needs. This solution will provide a safe, efficient, and eco-friendly method for disposing of menstrual waste.</p>
                                <p>This project is more than just an engineering challenge—it's a step towards breaking taboos, empowering women, and creating long-term impact in rural menstrual health management.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br /><br /><br />
            </section>

            {/* About Us Section */}
            <section id="about-us" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <br /><br /><br /><br /><br />
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The Society of Community Engineering (SCE) is a student-driven initiative dedicated to using engineering solutions to solve real-life challenges.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                            <p className="text-gray-600">We bridge the gap between technical knowledge and societal needs, ensuring that innovation directly benefits the community. We operate on a user-based model, meaning whenever an individual, business, or organization encounters a problem requiring an engineering solution, they can consult us.</p>
                            <p className="text-gray-600">Our team of passionate and skilled students then works on designing, developing, and implementing practical solutions tailored to their needs.</p>
                        </div>
                        
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900">What We Do</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-black rounded-full flex-shrink-0 mt-1"></div>
                                    <p className="text-gray-600">Infrastructure improvements and smart technology applications</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-black rounded-full flex-shrink-0 mt-1"></div>
                                    <p className="text-gray-600">Apply engineering principles for the greater good</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-black rounded-full flex-shrink-0 mt-1"></div>
                                    <p className="text-gray-600">Make everyday life more efficient, sustainable, and accessible</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-black rounded-full flex-shrink-0 mt-1"></div>
                                    <p className="text-gray-600">Collaborate, create, and make a difference—one solution at a time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br />
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Do you or your organization face a real-life challenge that needs an engineering solution? We're here to help!
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                            <form onSubmit={handleEmailSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        value={emailForm.name}
                                        onChange={(e) => setEmailForm({...emailForm, name: e.target.value})}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={emailForm.email}
                                        onChange={(e) => setEmailForm({...emailForm, email: e.target.value})}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        value={emailForm.subject}
                                        onChange={(e) => setEmailForm({...emailForm, subject: e.target.value})}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        value={emailForm.message}
                                        onChange={(e) => setEmailForm({...emailForm, message: e.target.value})}
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                                    <Send size={20} />
                                    <span>Send Message</span>
                                </button>
                            </form>
                        </div>
                        
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                                <p className="text-gray-600 mb-6">Whether it's a technical issue, a design challenge, or an innovative project that can improve lives, our team of dedicated student engineers is ready to work with you.</p>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-black" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Email</p>
                                        <p className="text-gray-600">sce@thapar.edu</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-black" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Location</p>
                                        <p className="text-gray-600">Thapar Institute of Engineering Technology, Patiala</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-amber-50 p-6 rounded-xl">
                                <h4 className="font-semibold text-gray-900 mb-3">How it Works</h4>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <p>✅ Tell us about your problem</p>
                                    <p>✅ Our team will assess the situation</p>
                                    <p>✅ We'll work together to create a practical solution!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section id="support" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-600 to-stone-700 text-white">
                <br /><br />
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Our Mission</h2>
                        <p className="text-xl max-w-3xl mx-auto opacity-90">
                            Help us build a better tomorrow by supporting meaningful, community-driven innovations that make a lasting difference.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* How to Support */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">How You Can Support Us</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">💰</div>
                                    <span className="text-lg">Donate Funds – Help us purchase essential materials</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">🤝</div>
                                    <span className="text-lg">Sponsor a Project – Partner with us for sustainable solutions</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">🔧</div>
                                    <span className="text-lg">Provide Resources – Technical tools, materials, or expertise</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">📢</div>
                                    <span className="text-lg">Spread the Word – Share our mission on social media</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Donation Form */}
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-6">Make a Donation</h3>
                            <form onSubmit={handleDonation} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Donation Amount (₹)</label>
                                    <input
                                        type="number"
                                        value={donationAmount}
                                        onChange={(e) => setDonationAmount(e.target.value)}
                                        placeholder="Enter amount"
                                        className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <button type="submit" className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                    Donate Now
                                </button>
                            </form>
                            
                            <div className="mt-6 p-4 bg-white/10 rounded-lg">
                                <h4 className="font-semibold mb-2">Where Your Support Goes</h4>
                                <div className="text-sm space-y-1 opacity-90">
                                    <p>✔️ Raw materials & components</p>
                                    <p>✔️ Testing & prototyping</p>
                                    <p>✔️ Transport & logistics</p>
                                    <p>✔️ Workshops & training</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600">
                            Everything you need to know about how the Society of Community Engineering (SCE) works.
                        </p>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Who can approach SCE for help?</h3>
                            <p className="text-gray-600">Anyone! Whether you are an individual, a community, an NGO, or an organization facing a real-world problem that requires an engineering solution, we're here to help.</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">2. What types of problems does SCE solve?</h3>
                            <p className="text-gray-600 mb-3">We focus on practical, engineering-driven solutions for challenges related to:</p>
                            <ul className="text-gray-600 space-y-1 ml-4">
                                <li>✔️ Sanitation & Waste Management (e.g., Sanitary Pad Incinerator)</li>
                                <li>✔️ Sustainable Energy (e.g., Solar-powered solutions)</li>
                                <li>✔️ Infrastructure & Public Safety (e.g., Affordable Water Filtration Systems)</li>
                                <li>✔️ Assistive Technology for the Disabled</li>
                                <li>✔️ Other community-driven challenges</li>
                            </ul>
                        </div>
                        
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">3. How does the process work?</h3>
                            <div className="text-gray-600 space-y-2">
                                <p><strong>Step 1:</strong> You submit your problem to us via our Contact Form or email.</p>
                                <p><strong>Step 2:</strong> Our team evaluates the issue and conducts a site visit if needed.</p>
                                <p><strong>Step 3:</strong> We research and design a practical engineering solution tailored to your needs.</p>
                                <p><strong>Step 4:</strong> With faculty guidance, we develop and implement the solution.</p>
                                <p><strong>Step 5:</strong> We ensure long-term sustainability and provide follow-up support if necessary.</p>
                            </div>
                        </div>
                        
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">4. How much does it cost to get a solution?</h3>
                            <p className="text-gray-600">Our work is non-profit and community-driven. We do not charge for designing solutions, but material costs, manufacturing, and implementation expenses may require funding. We explore grants, sponsorships, and external support to keep solutions as affordable as possible.</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Can students join SCE?</h3>
                            <p className="text-gray-600">Absolutely! If you're an engineering student passionate about solving real-world problems, you can join us as a volunteer, intern, or full-time member.</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">6. Can companies or NGOs collaborate with SCE?</h3>
                            <p className="text-gray-600">Yes! We welcome collaborations, sponsorships, and partnerships with organizations that align with our mission of using engineering for social good.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet The Team</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our dedicated team of seven engineering students working together to create impactful solutions.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Team Members */}
                        {[
                            { name: "Siya Gupta", role: "Engineering Student" },
                            { name: "Advik Sharma", role: "Engineering Student" },
                            { name: "Agamya Arora", role: "Engineering Student" },
                            { name: "Pulkit Jhamb", role: "Engineering Student" },
                            { name: "Harshit Dua", role: "Engineering Student" },
                            { name: "Arnav Gupta", role: "Engineering Student" }
                        ].map((member, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                                <div className="w-24 h-24 bg-amber-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <Users className="w-12 h-12 text-black" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                                <p className="text-sm text-gray-500 mt-2">Passionate about community-driven solutions</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center mt-12">
                        <div className="bg-amber-50 p-8 rounded-2xl max-w-2xl mx-auto">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Faculty Guidance</h3>
                            <p className="text-gray-600">Our projects are developed under the expert guidance of our faculty members at Thapar Institute of Engineering Technology, ensuring quality and safety in all our solutions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-2">
                            <h3 className="text-2xl font-bold mb-4">Society of Community Engineering</h3>
                            <p className="text-gray-300 mb-4 max-w-md">
                                Bridging the gap between technical knowledge and societal needs, ensuring that innovation directly benefits the community.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Facebook size={24} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Twitter size={24} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Instagram size={24} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Linkedin size={24} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Youtube size={24} />
                                </a>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><button onClick={() => scrollToSection('about-project')} className="text-gray-300 hover:text-white transition-colors">About Project</button></li>
                                <li><button onClick={() => scrollToSection('about-us')} className="text-gray-300 hover:text-white transition-colors">About Us</button></li>
                                <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button></li>
                                <li><button onClick={() => scrollToSection('support')} className="text-gray-300 hover:text-white transition-colors">Support Us</button></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                            <div className="space-y-2 text-gray-300">
                                <div className="flex items-center space-x-2">
                                    <Mail size={16} />
                                    <span>sce@thapar.edu</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <MapPin size={16} />
                                    <span>Thapar Institute, Patiala</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                        <p className="text-gray-400">
                            © 2024 Society of Community Engineering. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}