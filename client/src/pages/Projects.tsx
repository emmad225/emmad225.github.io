import { motion } from "framer-motion";
import PageTitle from "@/components/shared/PageTitle";
import ProjectCard from "@/components/projects/ProjectCard";
import TableauEmbed from "@/components/tableau/TableauEmbed";
import { projects } from "@/data/projects";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Projects = () => {
  const tableauVisualizations = [
    {
      title: "Global Climate Change Trends",
      description: "An interactive visualization of climate data across different regions.",
      url: "https://public.tableau.com/app/profile/example/viz/climate-change-trends"
    },
    {
      title: "Gender Diversity in STEM Fields",
      description: "Analysis of gender representation across various STEM disciplines over time.",
      url: "https://public.tableau.com/app/profile/example/viz/gender-diversity-stem"
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageTitle 
            title="My Projects" 
            subtitle="Explore my portfolio of data science and visualization work."
          />

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageTitle 
            title="Tableau Visualizations" 
            subtitle="Interactive data visualizations created with Tableau."
          />

          {tableauVisualizations.map((viz, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TableauEmbed 
                title={viz.title}
                description={viz.description}
                url={viz.url}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer included in every page */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-display font-bold">Jane<span className="text-[#ff7675]">Doe</span></span>
              <p className="text-neutral-400 mt-2">Data Scientist & STEM Advocate</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors mr-6">Privacy Policy</a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Projects;
