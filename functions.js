
var x = 0;
var p = 0;

function percentage (){
    for(var i = 0; i < data.fear.length; i++){
        x = data.fear[i].cpercentage + x;
        data.fear[i].offset = x + "%";
        };
        x = 0;
    for(var i = 0; i < data.shyness.length; i++){
        x = data.shyness[i].cpercentage + x;
        data.shyness[i].offset = x + "%";
        };
        x = 0;
    for(var i = 0; i < data.surprise.length; i++){
        x = data.surprise[i].cpercentage + x;
        data.surprise[i].offset = x + "%";
        };
        x = 0;
    for(var i = 0; i < data.trust.length; i++){
        x = data.trust[i].cpercentage + x;
        data.trust[i].offset = x + "%";
        };
        x = 0;
    for(var i = 0; i < data.sadness.length; i++){
        x = data.sadness[i].cpercentage + x;
        data.sadness[i].offset = x + "%";
        };
        x = 0;
    for(var i = 0; i < data.disgust.length; i++){
        x = data.disgust[i].cpercentage + x;
        data.disgust[i].offset = x + "%";
        };
        x = 0;
    for(var i = 0; i < data.anger.length; i++){
        x = data.anger[i].cpercentage + x;
        data.anger[i].offset = x + "%";
        };
        x = 0;
    for(var i = 0; i < data.anticipation.length; i++){
        x = data.anticipation[i].cpercentage + x;
        data.anticipation[i].offset = x + "%";
        }
    };

function hexToHSL(H) {
        // Convert hex to RGB first
        let r = 0, g = 0, b = 0;
        if (H.length == 4) {
            r = "0x" + H[1] + H[1];
            g = "0x" + H[2] + H[2];
            b = "0x" + H[3] + H[3];
        } else if (H.length == 7) {
            r = "0x" + H[1] + H[2];
            g = "0x" + H[3] + H[4];
            b = "0x" + H[5] + H[6];
        }
        
         // Then to HSL
            r /= 255;
            g /= 255;
            b /= 255;
            let cmin = Math.min(r,g,b),
                cmax = Math.max(r,g,b),
                delta = cmax - cmin,
                h = 0,
                s = 0,
                l = 0;

            if (delta == 0)
                h = 0;
            else if (cmax == r)
                h = ((g - b) / delta) % 6;
            else if (cmax == g)
                h = (b - r) / delta + 2;
            else
                h = (r - g) / delta + 4;

            h = Math.round(h * 60);

            if (h < 0)
                h += 360;

            l = (cmax + cmin) / 2;
            s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
            s = +(s * 100).toFixed(1);
            l = +(l * 100).toFixed(1);

           // return "hsl(" + h + "," + s + "%," + l + "%)";
           return ({
               "hue": h,
               "saturation" : s,
               "light" : l,
               "hsl" : "hsl(" + h + "," + s + "%," + l + "%)"
           })
           
    };

function hsl(){
        for(var i = 0; i < data.fear.length; i++){
            y = hexToHSL(data.fear[i].color);
            data.fear[i].colorHSL = y;
        };

        for(var i = 0; i < data.shyness.length; i++){
            y = hexToHSL(data.shyness[i].color);
            data.shyness[i].colorHSL = y;
        };
        for(var i = 0; i < data.surprise.length; i++){
            y = hexToHSL(data.surprise[i].color);
            data.surprise[i].colorHSL = y;
        };
        for(var i = 0; i < data.trust.length; i++){
            y = hexToHSL(data.trust[i].color);
            data.trust[i].colorHSL = y;
        };
        for(var i = 0; i < data.sadness.length; i++){
            y = hexToHSL(data.sadness[i].color);
            data.sadness[i].colorHSL = y;
        };
        for(var i = 0; i < data.disgust.length; i++){
            y = hexToHSL(data.disgust[i].color);
            data.disgust[i].colorHSL = y;
        };
        for(var i = 0; i < data.anger.length; i++){
            y = hexToHSL(data.anger[i].color);
            data.anger[i].colorHSL = y;
        };
        for(var i = 0; i < data.anticipation.length; i++){
            y = hexToHSL(data.anticipation[i].color);
            data.anticipation[i].colorHSL = y;
        }
    };


function updateDataGradient (){
        for (var i = 0; i < dataGradient.length; i++){
            p = data.fear[i].colorHSL;
            dataGradient[i].colorFear = p;
            p = data.fear[i].offset;
            dataGradient[i].offsetFearPer = p;
            p = data.fear[i].cpercentage;
            dataGradient[i].offsetFearNum = p;
        }
        for (var i = 0; i < dataGradient.length; i++){
            p = data.shyness[i].colorHSL;
            dataGradient[i].colorShyness = p;
            p = data.shyness[i].offset;
            dataGradient[i].offsetShynessPer = p;
            p = data.shyness[i].cpercentage;
            dataGradient[i].offsetShynessNum = p;
        }
        for (var i = 0; i < dataGradient.length; i++){
            p = data.surprise[i].colorHSL;
            dataGradient[i].colorSurprise = p;
            p = data.surprise[i].offset;
            dataGradient[i].offsetSurprisePer = p;
            p = data.surprise[i].cpercentage;
            dataGradient[i].offsetSurpriseNum = p;
        }
        for (var i = 0; i < dataGradient.length; i++){
            p = data.trust[i].colorHSL;
            dataGradient[i].colorTrust = p;
            p = data.trust[i].offset;
            dataGradient[i].offsetTrustPer = p;
            p = data.trust[i].cpercentage;
            dataGradient[i].offsetTrustNum = p;
        }
        for (var i = 0; i < dataGradient.length; i++){
            p = data.sadness[i].colorHSL;
            dataGradient[i].colorSadness = p;
            p = data.sadness[i].offset;
            dataGradient[i].offsetSadnessPer = p;
            p = data.sadness[i].cpercentage;
            dataGradient[i].offsetSadnessNum = p;
        }
        for (var i = 0; i < dataGradient.length; i++){
            p = data.disgust[i].colorHSL;
            dataGradient[i].colorDisgust = p;
            p = data.disgust[i].offset;
            dataGradient[i].offsetDisgustPer = p;
            p = data.disgust[i].cpercentage;
            dataGradient[i].offsetDisgustNum = p;
        }
        for (var i = 0; i < dataGradient.length; i++){
            p = data.anger[i].colorHSL;
            dataGradient[i].colorAnger = p;
            p = data.anger[i].offset;
            dataGradient[i].offsetAngerPer = p;
            p = data.anger[i].cpercentage;
            dataGradient[i].offsetAngerNum = p;
        }
        for (var i = 0; i < dataGradient.length; i++){
            p = data.anticipation[i].colorHSL;
            dataGradient[i].colorAnticipation = p;
            p = data.anticipation[i].offset;
            dataGradient[i].offsetAnticipationPer = p;
            p = data.anticipation[i].cpercentage;
            dataGradient[i].offsetAnticipationNum = p;
        }
   };

   function drawSerie (serie){
    if (serie === 0){
    stops.transition()
    .duration(duration)
    .attr("offset", function(d){return d.offsetFearPer; })
    .attr("stop-color",function(d){ return d.colorFear.hsl});

    circle
    .transition()
    .duration(duration)
    .attr("cx", function(d){ return x(d.colorFear.light);})
                .attr("cy", function(d){ return y(d.colorFear.saturation);})
                
                .attr("r", function (d){ return d.offsetFearNum * 2;})
                .style("fill", function(d){ return d.colorFear.hsl})

    circle.on("mouseover",function(e,d){
                var marginLeft = d3.select(".scatter").node().getBoundingClientRect().left
                var marginTop = d3.select(".scatter").node().getBoundingClientRect().top
                                    svg.append("text")
                                        .attr("class","per")
                                        .attr("x", e.pageX - marginLeft - 100)
                                        .attr("y", e.pageY - marginTop - 100)
                                        .text(function(){return d.offsetFearNum})
                                        .style("font-family","Xanh Mono")
                                        .style("font-size","20px")
                                        .style("fill","grey")
                                        .attr("opacity",1);
                                    svg.selectAll("circle")
                                        .attr("opacity",0.1);
                                    d3.select(this)
                                        .attr("opacity",1);
                                    });
  
    rectangle1
    .transition()
    .duration(duration)
    .attr("x", function(d,i){return  i * (d.offsetFearNum + 70)  })
                .attr("y",550)
                .attr("height", 80)
                .attr("width", function(d,i){ return  d.offsetFearNum * 2 })
                .style("fill", function(d){return d.colorFear.hsl} );

    text1
    .attr("x", function(d,i){return  i * (d.offsetFearNum + 70) })
                .attr("y",650)
                .style("fill", function(d){return d.colorFear.hsl} )
                .html(function(d){return  + d.colorFear.hue}); 
    text2
    .attr("x", function(d,i){return  i * (d.offsetFearNum + 70) })
                .attr("y",670)
                .style("fill", function(d){return d.colorFear.hsl} )
                .html(function(d){return  + d.colorFear.saturation}); 

    text3
    .attr("x", function(d,i){return  i * (d.offsetFearNum + 70) })
                .attr("y",690)
                .style("fill", function(d){return d.colorFear.hsl} )
                .html(function(d){return  + d.colorFear.light});
                
    
    mainText
            .transition()
            .duration(duration)
            .text("DataPainting: fear")  
    
    

    }
    else if (serie === 1){
    stops.transition()
    .duration(duration)
    .attr("offset", function(d){return d.offsetShynessPer; })
    .attr("stop-color",function(d){ return d.colorShyness.hsl});
    
        

    circle
    .transition()
    .duration(duration)
    .attr("cx", function(d){ return x(d.colorShyness.light);})
                .attr("cy", function(d){ return y(d.colorShyness.saturation);})
               
                .attr("r", function (d){ return d.offsetShynessNum * 2;})
                .style("fill", function(d){ return d.colorShyness.hsl});

    circle.on("mouseover",function(e,d){
                    var marginLeft = d3.select(".scatter").node().getBoundingClientRect().left
                    var marginTop = d3.select(".scatter").node().getBoundingClientRect().top
                                    svg.append("text")
                                        .attr("class","per")
                                        .attr("x", e.pageX - marginLeft - 100)
                                        .attr("y", e.pageY - marginTop - 100)
                                        .text(function(){return d.offsetShynessNum})
                                        .style("font-family","Xanh Mono")
                                        .style("font-size","20px")
                                        .style("fill","grey")
                                        .attr("opacity",1);
                                    svg.selectAll("circle")
                                        .attr("opacity",0.1);
                                    d3.select(this)
                                        .attr("opacity",1);
                                    });

    rectangle1
    .transition()
    .duration(duration)
    .attr("x", function(d,i){return  i * (d.offsetShynessNum + 70) })
                            .attr("y",550)
                            .attr("height", 80)
                            .attr("width", function(d,i){ return  d.offsetShynessNum * 2 })
                            .style("fill", function(d){return d.colorShyness.hsl} );
    
    text1
    .attr("x", function(d,i){return  i * (d.offsetShynessNum + 70) })
                .attr("y",650)
                .style("fill", function(d){return d.colorShyness.hsl} )
                .html(function(d){return  + d.colorShyness.hue}); 
    text2
    .attr("x", function(d,i){return  i * (d.offsetShynessNum + 70) })
                .attr("y",670)
                .style("fill", function(d){return d.colorShyness.hsl} )
                .html(function(d){return  + d.colorShyness.saturation}); 

    text3
    .attr("x", function(d,i){return  i * (d.offsetShynessNum + 70) })
                .attr("y",690)
                .style("fill", function(d){return d.colorShyness.hsl} )
                .html(function(d){return  + d.colorShyness.light});

    mainText
    .transition()
    .duration(duration)
            .text("DataPainting: joy")  
    }
    else if (serie === 2){
        stops.transition()
        .duration(duration)
        .attr("offset", function(d){return d.offsetSurprisePer; })
        .attr("stop-color",function(d){ return d.colorSurprise.hsl});
        
            
    
        circle
        .transition()
        .duration(duration)
        .attr("cx", function(d){ return x(d.colorSurprise.light);})
                    .attr("cy", function(d){ return y(d.colorSurprise.saturation);})
                   
                    .attr("r", function (d){ return d.offsetSurpriseNum * 2;})
                    .style("fill", function(d){ return d.colorSurprise.hsl});
    
        circle.on("mouseover",function(e,d){
                        var marginLeft = d3.select(".scatter").node().getBoundingClientRect().left
                        var marginTop = d3.select(".scatter").node().getBoundingClientRect().top
                                        svg.append("text")
                                            .attr("class","per")
                                            .attr("x", e.pageX - marginLeft - 100)
                                            .attr("y", e.pageY - marginTop - 100)
                                            .text(function(){return d.offsetSurpriseNum})
                                            .style("font-family","Xanh Mono")
                                            .style("font-size","20px")
                                            .style("fill","grey")
                                            .attr("opacity",1);
                                        svg.selectAll("circle")
                                            .attr("opacity",0.1);
                                        d3.select(this)
                                            .attr("opacity",1);
                                        });
    
        rectangle1
        .transition()
        .duration(duration)
        .attr("x", function(d,i){return  i * (d.offsetSurpriseNum + 70) })
                                .attr("y",550)
                                .attr("height", 80)
                                .attr("width", function(d,i){ return  d.offsetSurpriseNum * 2 })
                                .style("fill", function(d){return d.colorSurprise.hsl} );
        
        text1
        .attr("x", function(d,i){return  i * (d.offsetSurpriseNum + 70) })
                    .attr("y",650)
                    .style("fill", function(d){return d.colorSurprise.hsl} )
                    .html(function(d){return  + d.colorSurprise.hue}); 
        text2
        .attr("x", function(d,i){return  i * (d.offsetSurpriseNum + 70) })
                    .attr("y",670)
                    .style("fill", function(d){return d.colorSurprise.hsl} )
                    .html(function(d){return  + d.colorSurprise.saturation}); 
    
        text3
        .attr("x", function(d,i){return  i * (d.offsetSurpriseNum + 70) })
                    .attr("y",690)
                    .style("fill", function(d){return d.colorSurprise.hsl} )
                    .html(function(d){return  + d.colorSurprise.light});
    
        mainText
        .transition()
        .duration(duration)
                .text("DataPainting: surprise")  
        }
        else if (serie === 3){
            stops.transition()
            .duration(duration)
            .attr("offset", function(d){return d.offsetTrustPer; })
            .attr("stop-color",function(d){ return d.colorTrust.hsl});
            
                
        
            circle
            .transition()
            .duration(duration)
            .attr("cx", function(d){ return x(d.colorTrust.light);})
                        .attr("cy", function(d){ return y(d.colorTrust.saturation);})
                       
                        .attr("r", function (d){ return d.offsetTrustNum * 2;})
                        .style("fill", function(d){ return d.colorTrust.hsl});
        
            circle.on("mouseover",function(e,d){
                            var marginLeft = d3.select(".scatter").node().getBoundingClientRect().left
                            var marginTop = d3.select(".scatter").node().getBoundingClientRect().top
                                            svg.append("text")
                                                .attr("class","per")
                                                .attr("x", e.pageX - marginLeft - 100)
                                                .attr("y", e.pageY - marginTop - 100)
                                                .text(function(){return d.offsetTrustNum})
                                                .style("font-family","Xanh Mono")
                                                .style("font-size","20px")
                                                .style("fill","grey")
                                                .attr("opacity",1);
                                            svg.selectAll("circle")
                                                .attr("opacity",0.1);
                                            d3.select(this)
                                                .attr("opacity",1);
                                            });
        
            rectangle1
            .transition()
            .duration(duration)
            .attr("x", function(d,i){return  i * (d.offsetTrustNum + 70) })
                                    .attr("y",550)
                                    .attr("height", 80)
                                    .attr("width", function(d,i){ return  d.offsetTrustNum * 2 })
                                    .style("fill", function(d){return d.colorTrust.hsl} );
            
            text1
            .attr("x", function(d,i){return  i * (d.offsetTrustNum + 70) })
                        .attr("y",650)
                        .style("fill", function(d){return d.colorTrust.hsl} )
                        .html(function(d){return  + d.colorTrust.hue}); 
            text2
            .attr("x", function(d,i){return  i * (d.offsetTrustNum + 70) })
                        .attr("y",670)
                        .style("fill", function(d){return d.colorTrust.hsl} )
                        .html(function(d){return  + d.colorTrust.saturation}); 
        
            text3
            .attr("x", function(d,i){return  i * (d.offsetTrustNum + 70) })
                        .attr("y",690)
                        .style("fill", function(d){return d.colorTrust.hsl} )
                        .html(function(d){return  + d.colorTrust.light});
        
            mainText
            .transition()
            .duration(duration)
                    .text("DataPainting: trust")  
            }
            else if (serie === 4){
                stops.transition()
                .duration(duration)
                .attr("offset", function(d){return d.offsetSadnessPer; })
                .attr("stop-color",function(d){ return d.colorSadness.hsl});
                
                    
            
                circle
                .transition()
                .duration(duration)
                .attr("cx", function(d){ return x(d.colorSadness.light);})
                            .attr("cy", function(d){ return y(d.colorSadness.saturation);})
                           
                            .attr("r", function (d){ return d.offsetSadnessNum * 2;})
                            .style("fill", function(d){ return d.colorSadness.hsl});
            
                circle.on("mouseover",function(e,d){
                                var marginLeft = d3.select(".scatter").node().getBoundingClientRect().left
                                var marginTop = d3.select(".scatter").node().getBoundingClientRect().top
                                                svg.append("text")
                                                    .attr("class","per")
                                                    .attr("x", e.pageX - marginLeft - 100)
                                                    .attr("y", e.pageY - marginTop - 100)
                                                    .text(function(){return d.offsetSadnessNum})
                                                    .style("font-family","Xanh Mono")
                                                    .style("font-size","20px")
                                                    .style("fill","grey")
                                                    .attr("opacity",1);
                                                svg.selectAll("circle")
                                                    .attr("opacity",0.1);
                                                d3.select(this)
                                                    .attr("opacity",1);
                                                });
            
                rectangle1
                .transition()
                .duration(duration)
                .attr("x", function(d,i){return  i * (d.offsetSadnessNum + 70) })
                                        .attr("y",550)
                                        .attr("height", 80)
                                        .attr("width", function(d,i){ return  d.offsetSadnessNum * 2 })
                                        .style("fill", function(d){return d.colorSadness.hsl} );
                
                text1
                .attr("x", function(d,i){return  i * (d.offsetSadnessNum + 70) })
                            .attr("y",650)
                            .style("fill", function(d){return d.colorSadness.hsl} )
                            .html(function(d){return  + d.colorSadness.hue}); 
                text2
                .attr("x", function(d,i){return  i * (d.offsetSadnessNum + 70) })
                            .attr("y",670)
                            .style("fill", function(d){return d.colorSadness.hsl} )
                            .html(function(d){return  + d.colorSadness.saturation}); 
            
                text3
                .attr("x", function(d,i){return  i * (d.offsetSadnessNum + 70) })
                            .attr("y",690)
                            .style("fill", function(d){return d.colorSadness.hsl} )
                            .html(function(d){return  + d.colorSadness.light});
            
                mainText
                .transition()
                .duration(duration)
                        .text("DataPainting: sadness")  
                }
                else if (serie === 5){
                    stops.transition()
                    .duration(duration)
                    .attr("offset", function(d){return d.offsetDisgustPer; })
                    .attr("stop-color",function(d){ return d.colorDisgust.hsl});
                    
                        
                
                    circle
                    .transition()
                    .duration(duration)
                    .attr("cx", function(d){ return x(d.colorDisgust.light);})
                                .attr("cy", function(d){ return y(d.colorDisgust.saturation);})
                               
                                .attr("r", function (d){ return d.offsetDisgustNum * 2;})
                                .style("fill", function(d){ return d.colorDisgust.hsl});
                
                    circle.on("mouseover",function(e,d){
                                    var marginLeft = d3.select(".scatter").node().getBoundingClientRect().left
                                    var marginTop = d3.select(".scatter").node().getBoundingClientRect().top
                                                    svg.append("text")
                                                        .attr("class","per")
                                                        .attr("x", e.pageX - marginLeft - 100)
                                                        .attr("y", e.pageY - marginTop - 100)
                                                        .text(function(){return d.offsetDisgustNum})
                                                        .style("font-family","Xanh Mono")
                                                        .style("font-size","20px")
                                                        .style("fill","grey")
                                                        .attr("opacity",1);
                                                    svg.selectAll("circle")
                                                        .attr("opacity",0.1);
                                                    d3.select(this)
                                                        .attr("opacity",1);
                                                    });
                
                    rectangle1
                    .transition()
                    .duration(duration)
                    .attr("x", function(d,i){return  i * (d.offsetDisgustNum + 70) })
                                            .attr("y",550)
                                            .attr("height", 80)
                                            .attr("width", function(d,i){ return  d.offsetDisgustNum * 2 })
                                            .style("fill", function(d){return d.colorDisgust.hsl} );
                    
                    text1
                    .attr("x", function(d,i){return  i * (d.offsetDisgustNum + 70) })
                                .attr("y",650)
                                .style("fill", function(d){return d.colorDisgust.hsl} )
                                .html(function(d){return  + d.colorDisgust.hue}); 
                    text2
                    .attr("x", function(d,i){return  i * (d.offsetDisgustNum + 70) })
                                .attr("y",670)
                                .style("fill", function(d){return d.colorDisgust.hsl} )
                                .html(function(d){return  + d.colorDisgust.saturation}); 
                
                    text3
                    .attr("x", function(d,i){return  i * (d.offsetDisgustNum + 70) })
                                .attr("y",690)
                                .style("fill", function(d){return d.colorDisgust.hsl} )
                                .html(function(d){return  + d.colorDisgust.light});
                
                    mainText
                    .transition()
                    .duration(duration)
                            .text("DataPainting: disgust")  
                    }else if (serie === 6){
                        stops.transition()
                        .duration(duration)
                        .attr("offset", function(d){return d.offsetAngerPer; })
                        .attr("stop-color",function(d){ return d.colorAnger.hsl});
                        
                            
                    
                        circle
                        .transition()
                        .duration(duration)
                        .attr("cx", function(d){ return x(d.colorAnger.light);})
                                    .attr("cy", function(d){ return y(d.colorAnger.saturation);})
                                   
                                    .attr("r", function (d){ return d.offsetAngerNum * 2;})
                                    .style("fill", function(d){ return d.colorAnger.hsl});
                    
                        circle.on("mouseover",function(e,d){
                                        var marginLeft = d3.select(".scatter").node().getBoundingClientRect().left
                                        var marginTop = d3.select(".scatter").node().getBoundingClientRect().top
                                                        svg.append("text")
                                                            .attr("class","per")
                                                            .attr("x", e.pageX - marginLeft - 100)
                                                            .attr("y", e.pageY - marginTop - 100)
                                                            .text(function(){return d.offsetAngerNum})
                                                            .style("font-family","Xanh Mono")
                                                            .style("font-size","20px")
                                                            .style("fill","grey")
                                                            .attr("opacity",1);
                                                        svg.selectAll("circle")
                                                            .attr("opacity",0.1);
                                                        d3.select(this)
                                                            .attr("opacity",1);
                                                        });
                    
                        rectangle1
                        .transition()
                        .duration(duration)
                        .attr("x", function(d,i){return  i * (d.offsetAngerNum + 70) })
                                                .attr("y",550)
                                                .attr("height", 80)
                                                .attr("width", function(d,i){ return  d.offsetAngerNum * 2 })
                                                .style("fill", function(d){return d.colorAnger.hsl} );
                        
                        text1
                        .attr("x", function(d,i){return  i * (d.offsetAngerNum + 70) })
                                    .attr("y",650)
                                    .style("fill", function(d){return d.colorAnger.hsl} )
                                    .html(function(d){return  + d.colorAnger.hue}); 
                        text2
                        .attr("x", function(d,i){return  i * (d.offsetAngerNum + 70) })
                                    .attr("y",670)
                                    .style("fill", function(d){return d.colorAnger.hsl} )
                                    .html(function(d){return  + d.colorAnger.saturation}); 
                    
                        text3
                        .attr("x", function(d,i){return  i * (d.offsetAngerNum + 70) })
                                    .attr("y",690)
                                    .style("fill", function(d){return d.colorAnger.hsl} )
                                    .html(function(d){return  + d.colorAnger.light});
                    
                        mainText
                        .transition()
                        .duration(duration)
                                .text("DataPainting: anger")  
                        }else if (serie === 7){
                            stops.transition()
                            .duration(duration)
                            .attr("offset", function(d){return d.offsetAnticipationPer; })
                            .attr("stop-color",function(d){ return d.colorAnticipation.hsl});
                            
                                
                        
                            circle
                            .transition()
                            .duration(duration)
                            .attr("cx", function(d){ return x(d.colorAnticipation.light);})
                                        .attr("cy", function(d){ return y(d.colorAnticipation.saturation);})
                                       
                                        .attr("r", function (d){ return d.offsetAnticipationNum * 2;})
                                        .style("fill", function(d){ return d.colorAnticipation.hsl});
                        
                            circle.on("mouseover",function(e,d){
                                            var marginLeft = d3.select(".scatter").node().getBoundingClientRect().left
                                            var marginTop = d3.select(".scatter").node().getBoundingClientRect().top
                                                            svg.append("text")
                                                                .attr("class","per")
                                                                .attr("x", e.pageX - marginLeft - 100)
                                                                .attr("y", e.pageY - marginTop - 100)
                                                                .text(function(){return d.offsetAnticipationNum})
                                                                .style("font-family","Xanh Mono")
                                                                .style("font-size","20px")
                                                                .style("fill","grey")
                                                                .attr("opacity",1);
                                                            svg.selectAll("circle")
                                                                .attr("opacity",0.1);
                                                            d3.select(this)
                                                                .attr("opacity",1);
                                                            });
                        
                            rectangle1
                            .transition()
                            .duration(duration)
                            .attr("x", function(d,i){return  i * (d.offsetAnticipationNum + 70) })
                                                    .attr("y",550)
                                                    .attr("height", 80)
                                                    .attr("width", function(d,i){ return  d.offsetAnticipationNum * 2 })
                                                    .style("fill", function(d){return d.colorAnticipation.hsl} );
                            
                            text1
                            .attr("x", function(d,i){return  i * (d.offsetAnticipationNum + 70) })
                                        .attr("y",650)
                                        .style("fill", function(d){return d.colorAnticipation.hsl} )
                                        .html(function(d){return  + d.colorAnticipation.hue}); 
                            text2
                            .attr("x", function(d,i){return  i * (d.offsetAnticipationNum + 70) })
                                        .attr("y",670)
                                        .style("fill", function(d){return d.colorAnticipation.hsl} )
                                        .html(function(d){return  + d.colorAnticipation.saturation}); 
                        
                            text3
                            .attr("x", function(d,i){return  i * (d.offsetAnticipationNum + 70) })
                                        .attr("y",690)
                                        .style("fill", function(d){return d.colorAnticipation.hsl} )
                                        .html(function(d){return  + d.colorAnticipation.light});
                        
                            mainText
                            .transition()
                            .duration(duration)
                                    .text("DataPainting: anticipation")  
                            }
};