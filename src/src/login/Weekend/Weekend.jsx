import React from 'react'
import './weekend.css'
export default function Weekend() {
  return (
  

    <div class="main">
        <div class="navbar">
            <div class="icon">
                <h2 class="logo">WEEKEND</h2>
            </div>

            <div class="menu">
                <ul>
                    <li><a href="#">INSERT</a></li>
                    <li><a href="#">MODIFY</a></li>
                    <li><a href="#">DELETE</a></li>
                    <li><a href="#">SUMMARY</a></li>
                </ul>
            </div>
            <div>
            <form>
                <label for="teamld">TEAM LEAD</label><br/>
                <input type="text" id="teamld" name="teamld"/><br/>
                <label for="a">GROUP A</label><br/>
                <input type="text" id="a" name="a"/><br/>
                <label for="b">GROUP B</label><br/>
                <input type="text" id="b" name="b"/><br/>
                <label for="c">GROUP C</label><br/>
                <input type="text" id="c" name="c"/><br/>
                <label for="d">GROUP D</label><br/>
                <input type="text" id="d" name="d"/><br/>
                <input type="submit" value="Submit"/>
              </form>
</div>
        </div> 
        </div>
                
  )
  }
