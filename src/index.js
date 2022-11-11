import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Quiz from './quiz';

function Sidenav(){
    return(
        <div class="sidenav">
        <h2>Contents</h2>
        <a href="#one">What is HTML?</a>
        <a href="#two">HTML Elements</a>
        <a href="#three">HTML Page Structure</a>
        <a href="#four">HTML Tags</a>
        <a href="#five">Useful Links</a>
        <a href="#six">Test Your Knowledge</a>
        </div>
    );
}


function Content1() {
    return (
        <div id="one">
        
            <h1>Introduction to HTML</h1>
            
            <p>HTML is the standard markup language for creating Web pages.</p>

            <ul className='list'>
                <li>HTML stands for Hyper Text Markup Language</li>
                <li>HTML is the standard markup language for creating Web pages</li>
                <li>HTML describes the structure of a Web page</li>
                <li>HTML consists of a series of elements</li>
                <li>HTML elements tell the browser how to display the content</li>
                <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
            </ul>


        </div>
    ); 
}

function Content2() {
    return(
        <div id="two">
            <h1>What is an HTML Element?</h1><br></br>
            <img src="https://developer.mozilla.org/en-US/docs/Glossary/Element/anatomy-of-an-html-element.png" alt="anatomy-of-an-html-element"></img><br></br>
            
            <p>HTML elements can be nested (this means that elements can contain other elements). All HTML documents consist of nested HTML elements.</p>

        </div>
    );
}

function Content3() {
    return(
        <div id="three">
        <h1>HTML Page Structure</h1><br></br>
        <img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/573/506/datas/original.png" alt="Basic HTML Structure"></img>
        </div>
    );
}

function Content4() {
    return(
        <div id="four">
        <h1>The Most Common HTML Tags</h1><br></br>
        
        <table>
    <tr>
        <th>Tag</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>&lt;!--...--&gt;</td>
        <td>Defines a comment</td>
    </tr>
    <tr>
        <td>&lt;!DOCTYPE&gt;</td>
        <td>Defines the document type</td>
    </tr>
    <tr>
        <td>&lt;a&gt;</td>
        <td>Defines a hyperlink</td>
    </tr>
    <tr>
        <td>&lt;p&gt;</td>
        <td>Paragraph</td>
    </tr>
    <tr>
        <td>&lt;address&gt;</td>
        <td>Defines contact information for the author/owner of a document</td>
    </tr>
    <tr>
        <td>&lt;area&gt;</td>
        <td>Defines an area inside an image map</td>
    </tr>
    <tr>
        <td>&lt;h1&gt;</td>
        <td>Defines heading 1, can also use 2,3,4,5,6</td>
    </tr>
    <tr>
        <td>&lt;strong&gt;</td>
        <td>Defines important text</td>
    </tr>
    <tr>
        <td>&lt;address&gt;</td>
        <td>Defines contact information for the author/owner of a documen</td>
    </tr>
    <tr>
        <td>&lt;em&gt;</td>
        <td>Defines emphasized text </td>
    </tr>
    <tr>
        <td>&lt;abbr&gt;</td>
        <td>Defines an abbreviation or an acronym</td>
    </tr>
    <tr>
        <td>&lt;bdo&gt;</td>
        <td>Overrides the current text direction</td>
    </tr>
    <tr>
        <td>&lt;blockquote&gt;</td>
        <td>Defines a section that is quoted from another source</td>
    </tr>
    <tr>
        <td>&lt;cite&gt;</td>
        <td>Defines the title of a work</td>
    </tr>
    <tr>
        <td>&lt;q&gt;</td>
        <td>Defines a short quotation</td>
    </tr>
    <tr>
        <td>&lt;code&gt;</td>
        <td>Defines a piece of computer code</td>
    </tr>
    <tr>
        <td>&lt;ins&gt;</td>
        <td>Defines a text that has been inserted into a document</td>
    </tr>
    <tr>
        <td>&lt;del&gt;</td>
        <td>Defines text that has been deleted from a document</td>
    </tr>
    <tr>
        <td>&lt;dfn&gt;</td>
        <td>Specifies a term that is going to be defined within the content</td>
    </tr>
    <tr>
        <td>&lt;kbd&gt;</td>
        <td>Defines keyboard input</td>
    </tr>
    <tr>
        <td>&lt;pre&gt;</td>
        <td>Defines preformatted text</td>
    </tr>
    <tr>
        <td>&lt;samp&gt;</td>
        <td>Defines sample output from a computer program</td>
    </tr>
    <tr>
        <td>&lt;var&gt;</td>
        <td>Defines a variable</td>
    </tr>
    <tr>
        <td>&lt;br&gt;</td>
        <td>Defines a single line break</td>
    </tr>
    <tr>
        <td>&lt;div&gt;</td>
        <td>Defines a section in a document</td>
    </tr>
    <tr>
        <td>&lt;a&gt;</td>
        <td>Defines a hyperlink</td>
    </tr>
    <tr>
        <td>&lt;base&gt;</td>
        <td>Specifies the base URL/target for all relative URLs in a document</td>
    </tr>
    <tr>
        <td>&lt;img&gt;</td>
        <td>Defines an image</td>
    </tr>
    <tr>
        <td>&lt;area&gt;</td>
        <td>Defines an area inside an image map</td>
    </tr>
    <tr>
        <td>&lt;map&gt;</td>
        <td>Defines an image map</td>
    </tr>
    <tr>
        <td>&lt;param&gt;</td>
        <td>Defines a parameter for an object</td>
    </tr>
    <tr>
        <td>&lt;object&gt;</td>
        <td>Defines a container for an external application</td>
    </tr>
    <tr>
        <td>&lt;ul&gt;</td>
        <td>Defines an unordered list</td>
    </tr>
    <tr>
        <td>&lt;ol&gt;</td>
        <td>Defines an ordered list</td>
    </tr>
    <tr>
        <td>&lt;li&gt;</td>
        <td>Defines a list item</td>
    </tr>
    <tr>
        <td>&lt;dl&gt;</td>
        <td>Defines a description list</td>
    </tr>
    <tr>
        <td>&lt;dt&gt;</td>
        <td>Defines a term/name in a description list</td>
    </tr>
    <tr>
        <td>&lt;dd&gt;</td>
        <td>Defines a description/value of a term in a description list</td>
    </tr>
    <tr>
        <td>&lt;table&gt;</td>
        <td>Defines a table</td>
    </tr>

    </table><br></br>
    <a href="https://www.javatpoint.com/html-tags" target="_blank">Click this link for a full guide on html tags</a><br></br>
    </div>
    );
}

function Content5() {
    return(
        <div id="five">

        <h1>Some Useful Links:</h1>
        <iframe width="640" height="360" src="https://www.youtube.com/embed/BvJYXl2ywUE" title="Introduction to HTML || Your First Web Page || Part 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="640" height="360" src="https://www.youtube.com/embed/PypMN-yui4Y" title="Introduction to HTML || Basic HTML Elements || Part 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br></br>
        <a href="https://www.w3schools.com/html/" target="_blank">W3 Schools Guide to HTML</a><br></br>

        </div>
    );
}

function Content6() {
    return(
        <div id="six">
            <h1>Test Your Knowledge!</h1><br></br>
        </div>

    );
}

//Master Function
function App() {
    return(
    <React.Fragment>
      <Sidenav />
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <Content6 />
      <Quiz />
    </React.Fragment>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
