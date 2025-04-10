import React from "react";
import { Link, useParams } from "react-router-dom";
import { verbTopics } from "../data";

function GrammarsPage() {
      
  // Define types for topic components
      interface TopicComponents {
        [key: string]: React.FC;
      }
  
  // Define topic components
  const topicComponents: TopicComponents = {
    "verb-basics": () => <div>Verb</div>,
    "noun-basic": () => <div>Noun</div>,
  };
  




  // Extract route parameters
  const { topic, subtopic, child } = useParams<{ topic?: string; 
    subtopic?: string; child?: string }>();

      const toSlug = (text: string): string =>
      text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  
    const getDynamicContent = (): React.ReactNode => {
      const matchedTopic = verbTopics.find((t) => toSlug(t.title) === topic);
      console.log("matchedTopic", matchedTopic);
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
      return null; // Return null if no dynamic content matches
    };

  return (
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
      <Link to="/" className="text-teal-700 hover:underline mb-6 inline-block">← Back to Home</Link>
      <h1 className="text-3xl font-bold text-teal-700 mb-8 text-center">Finnish Grammar</h1>
    
    {/* Menu Section */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      <h3 className="text-xl font-semibold text-teal-700 mb-2">Topics</h3>
      {verbTopics && verbTopics.length > 0 ? (
        verbTopics.map((topic) => (
          <div key={topic.title}>
            <h3 className="text-xl font-semibold text-teal-700 mb-2">{topic.title}</h3>
            <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
              {topic.subtopics && topic.subtopics.length > 0 && (
                <ul className="ml-6 list-disc">
                  {topic.subtopics.map((subtopic) => (
                    <li key={subtopic.title}>
                      <Link to={`/beginars/${toSlug(topic.title)}/${toSlug(subtopic.title)}`}>
                        {subtopic.title} (Explanation)
                      </Link>
                      {subtopic.childTopics && subtopic.childTopics.length > 0 && (
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 mt-2">
                          {subtopic.childTopics.map((child) => (
                            <li key={child}>
                              <Link
                                to={`/beginars/${toSlug(topic.title)}/${toSlug(subtopic.title)}/${toSlug(child)}`}
                              >
                                {child}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        ))
      ) : (
        <p>Loading topics...</p>
      )}
    </div>

      
      {/* Dynamic Content */}
      {getDynamicContent()}
    </div>
  );
}

export default GrammarsPage;