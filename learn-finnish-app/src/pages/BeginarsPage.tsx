                import React, { useState } from "react";
                import { Link, useParams } from "react-router-dom";
                import { a1Topics } from "../data";
                import BodyWrapper from "../components/wrapper/BodyWrapper";
                import PageWrapper from "../components/wrapper/PageWrapper";
                import NavWrapper from "../components/wrapper/NavWrapper";

                // Define types for topic components
                interface TopicComponents {
                  [key: string]: React.FC;
                }



                // Define topic components
                const topicComponents: TopicComponents = {
                  "language-basics": () => <div>Language Basics Component</div>,
                  "basic-greetings": () => <div>Greetings Component</div>,
                };

                function BeginarsPage() {


                  const { topic, subtopic, child } = useParams<{ topic?: string; subtopic?: string; child?: string }>();


                  const toSlug = (text: string): string =>
                    text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

                
                  const getDynamicContent = (): React.ReactNode => {
                    const matchedTopic = a1Topics.find((t) => toSlug(t.title) === topic);
                    if (!matchedTopic && topic) {
                      return (
                        <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
                          <h2 className="text-2xl font-semibold text-teal-800 mb-4">Not Found</h2>
                          <p className="text-gray-600">Topic not found.</p>
                        </div>
                      );
                    }

                    const matchedSubtopic = matchedTopic?.subtopics?.find((s) => toSlug(s.title) === subtopic);
                    if (topic && subtopic && !child) {
                      if (!matchedSubtopic) {
                        return (
                          <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
                            <h2 className="text-2xl font-semibold text-teal-800 mb-4">Not Found</h2>
                            <p className="text-gray-600">Subtopic not found.</p>
                          </div>
                        );
                      }
                      const SubtopicComponent = topicComponents[toSlug(matchedSubtopic.title)];
                      if (SubtopicComponent) {
                        return <SubtopicComponent />;
                      }
                      return (
                        <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
                          <h2 className="text-2xl font-semibold text-teal-800 mb-4">{matchedSubtopic.title}</h2>
                          <p className="text-gray-600">Content coming soon!</p>
                        </div>
                      );
                    }
                    return null;
                  };

                  return (
                    <BodyWrapper >
                      <NavWrapper link="/" title="← Back to Home" > </NavWrapper>
                     

                      <div className="mt-16">


                        <PageWrapper title="Beginner Finnish Topics">
                          <div className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                            <h4 className="text-xl font-semibold text-teal-400 mb-6">Level A1: A1.1 to A1.3</h4>
                             <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg border border-teal-800 p-4 mb-6">
                          
                            <blockquote className="text-xl italic  text-gray-300 dark:text-gray-300 mb-6">
                              “Can understand and use familiar everyday expressions and very basic phrases aimed at the satisfaction of needs of a concrete type. Can introduce him/herself and others and can ask and answer questions about personal details such as where he/she lives, people he/she knows and things he/she has. Can interact in a simple way provided the other person talks slowly and clearly and is prepared to help.”
                              <br />
                              <br />- Council of Europe
                            </blockquote>
                            </div>
                          </div>
                          <div className="bg-gray-900 rounded-lg border border-teal-800 p-4">
                          <h3 className="text-xl font-semibold text-teal-400 mb-6">Level A1 Summary</h3>
                            <div className="mb-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg border border-teal-800 p-4 mb-6">
                          
                            <p className="text-gray-300">
                              The A1 level of the Common European Framework of Reference for Languages (CEFR) is the beginner stage, often called "Elementary" or "Breakthrough." At this level, learners are expected to understand and use basic vocabulary and grammar to handle everyday situations, such as introducing themselves, asking simple questions, and talking about daily routines or immediate needs. For Finnish, a language with a complex grammatical structure, the A1 curriculum focuses on foundational elements that are practical and manageable for beginners.
                            </p>
                            <p className="text-gray-300 mb-4">
                              Below, I’ll provide a daily life grammar roadmap tailored to Finnish at the A1 level. This roadmap emphasizes the essential grammar topics needed for basic communication in daily life scenarios{" "}
                              <span className="text-xl text-pink-500">(e.g., greetings, shopping, directions, time, family).</span>
                            </p>
                            </div>
                          </div>
                      

                        <div className="mt-6 p-6 rounded-xl shadow-lg max-w-5xl mx-auto mb-10 bg-gray-900 border border-teal-700">
  <h3 className="text-2xl font-bold text-teal-300 mb-6 text-center">A1 Topics</h3>

  {a1Topics && a1Topics.length > 0 ? (
    <div className="">
      {a1Topics.map((topic) => (
        <div
          key={topic.title}
          className="rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-teal-700 p-5 shadow-md shadow-teal-900 rounded hover:shadow-teal-500/30 transition-all duration-300 hover:-translate-y-1 mb-6"
        >
          <h3 className="text-xl font-semibold text-teal-300 mb-3">{topic.title}</h3>

          {topic.subtopics && topic.subtopics.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-4">
              {topic.subtopics.map((subtopic) => (
                <div key={subtopic.title} className="w-full">
                  <Link
                    to={`/beginars/${toSlug(topic.title)}/${toSlug(subtopic.title)}`}
                    className="inline-block w-full text-center text-sm font-medium text-teal-200 bg-gray-900 shadow-sm rounded shadow-teal-900 px-4 py-2 hover:bg-teal-700/20 hover:text-white transition-all duration-300"
                  >
                    {subtopic.title}
                  </Link>

                  {/* If subtopic has child topics */}
                  {subtopic.childTopics && subtopic.childTopics.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-6">
                      {subtopic.childTopics.map((child) => (
                        <Link
                          key={child}
                          to={`/beginars/${toSlug(topic.title)}/${toSlug(subtopic.title)}/${toSlug(child)}`}
                          className="inline-block w-full text-center text-sm font-medium text-teal-200 bg-gray-900 shadow-sm rounded shadow-teal-900 px-4 py-2 hover:bg-teal-700/20 hover:text-white transition-all duration-300"
                        >
                          {child}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-sm">No subtopics yet.</p>
          )}
        </div>
      ))}
    </div>
  ) : (
    <p className="text-gray-400 text-center">Loading topics...</p>
  )}
</div>


                       

                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
                          <h2 className="text-2xl font-semibold text-teal-300 mb-4">A1 Finnish Grammar Roadmap for Daily Life</h2>
                          <h4 className="text-xl font-semibold text-teal-400 mb-6">Goals of A1 Grammar (Coming Soon)</h4>
                          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg border border-teal-800 p-4 mb-6">
                            <ul className="list-disc pl-6">
                              <li className="text-orange-600 font-semibold mb-2">
                                <span className="text-teal-300">Understand:</span>
                                <br />
                                Simple sentences and questions <br />
                                (e.g., <span className="italic">Missä olet?</span> – "Where are you?").
                              </li>
                              <li className="text-purple-500 font-semibold mb-2">
                                <span className="text-teal-300">Produce:</span>
                                <br />
                                Basic statements and responses <br />
                                (e.g., <span className="italic">Olen kotona</span> – "I’m at home").
                              </li>
                              <li className="text-yellow-400 font-semibold">
                                <span className="text-teal-300">Interact:</span>
                                <br />
                                Handle greetings, introductions, and common requests <br />
                                (e.g., <span className="italic">Haluan vettä</span> – "I want water").
                              </li>
                            </ul>
                          </div>
                        </div>

                        {getDynamicContent()}
                      </PageWrapper>
                      </div>

                       <div >

                        </div>








                    </BodyWrapper>
                  );
                }

                export default BeginarsPage;