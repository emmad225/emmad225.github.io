import { motion } from "framer-motion";
import PageTitle from "@/components/shared/PageTitle";
import { resume } from "@/data/resume";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Resume = () => {
  const { experiences, education } = resume;

  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageTitle
            title="Resume"
            subtitle="My professional journey and qualifications."
          />

          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8">
              {/* Experience Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-bold text-neutral-800 mb-6 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mr-3">
                    <i className="fas fa-briefcase"></i>
                  </span>
                  Professional Experience
                </h3>

                <motion.div
                  variants={staggerChildren}
                  initial="hidden"
                  animate="visible"
                >
                  {experiences.map((experience, index) => (
                    <motion.div
                      key={index}
                      className="ml-13 pl-8 border-l-2 border-neutral-200 mb-8 last:mb-0"
                      variants={fadeInUp}
                    >
                      <div className="relative">
                        <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-primary"></div>
                        <h4 className="text-xl font-display font-bold text-neutral-800">
                          {experience.title}
                        </h4>
                        <p className="text-primary font-accent text-sm mb-2">
                          {experience.company} • {experience.period}
                        </p>
                        <p className="text-neutral-600 mb-4">
                          {experience.description}
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          {experience.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Education Section */}
              <div>
                <h3 className="text-2xl font-display font-bold text-neutral-800 mb-6 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mr-3">
                    <i className="fas fa-graduation-cap"></i>
                  </span>
                  Education
                </h3>

                <motion.div
                  variants={staggerChildren}
                  initial="hidden"
                  animate="visible"
                >
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="ml-13 pl-8 border-l-2 border-neutral-200 mb-8 last:mb-0"
                      variants={fadeInUp}
                    >
                      <div className="relative">
                        <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-primary"></div>
                        <h4 className="text-xl font-display font-bold text-neutral-800">
                          {edu.degree}
                        </h4>
                        <p className="text-primary font-accent text-sm mb-2">
                          {edu.institution} • {edu.period}
                        </p>
                        <p className="text-primary font-accent text-sm mb-2">
                          {edu.GPA}
                        </p>
                        <p className="text-neutral-600">{edu.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="bg-[#3e5b79] p-6 flex justify-center">
              <a
                href="https://drive.google.com/file/d/1RDlzwA_fd_OEkhatL_MT9P6NeCVXT3PN/view"
                className={cn(
                  buttonVariants(),
                  "rounded-full border-[#3e5b79] text-white hover:text-black font-accent",
                )}
              >
                <i className="fas fa-download mr-2"></i> Download Full Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3e5b79] text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold">Emma Duffy</span>
              <p className="text-primary-foreground/80 mt-2">
                Software and Data Engineering
              </p>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/emma-duffy4/"
                className="text-white hover:text-neutral-400 transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/emmad225/"
                className="text-white hover:text-neutral-400 transition-colors"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="mailto:eduffy225@gmail.com"
                className="text-white hover:text-neutral-400 transition-colors"
              >
                <i className="fas fa-envelope mr-2"></i>
              </a>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} Emma Duffy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Resume;
