import React, { useEffect } from 'react';

const ChatbaseChatbot = () => {
  useEffect(() => {
    const loadChatbaseScript = async () => {
      try {
        const existingScript = document.querySelector(`script[src="https://www.chatbase.co/embed.min.js"]`);

        if (!existingScript) {
          const script = document.createElement('script');
          script.src = 'https://www.chatbase.co/embed.min.js';
          script.setAttribute('chatbotId', 'xRspk29JJ9TNMJbeYpUR-');
          script.setAttribute('domain', 'www.chatbase.co');
          script.defer = true;

          // Add event listeners for script load and error
          script.onload = () => {
            console.log('Chatbase script loaded successfully');
          };

          script.onerror = (error) => {
            console.error('Error loading Chatbase script:', error);
          };

          document.body.appendChild(script);

          // Clean up function to remove the script on unmount (optional)
          return () => {
            document.body.removeChild(script);
          };
        }
      } catch (error) {
        console.error('Error in useEffect:', error);
      }
    };

    loadChatbaseScript();

  }, []);

  return null; // No need to render anything here, as scripts handle embedding
};

export default ChatbaseChatbot;
