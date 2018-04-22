
$(function () {

    function renderProfileTable(response) {

        function shuffle(response) {
            var currentIndex = response.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = response[currentIndex];
                response[currentIndex] = response[randomIndex];
                response[randomIndex] = temporaryValue;
            }
            return response;
        };
        shuffle(response);

        var finalHTML = "";
        var listNumber = 0;
        var modalHTML = "";
        response.forEach(function (currentProfile) {
            listNumber++;

            //Table HTML//
            finalHTML += '<tr data-toggle="modal" data-target="#' + currentProfile.id +'" class="currentRow">';
            finalHTML += '<th scope="row">' + listNumber + '</th>';
            finalHTML += '<td>' + currentProfile.fullName + '</td>';
            finalHTML += '<td>' + currentProfile.email + '</td>';
            finalHTML += '</tr>';

            //Modal HTML//
            modalHTML += '<div class="modal fade" id="' + currentProfile.id +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">';
            modalHTML += '<div class="modal-dialog modal-dialog-centered" role="document">';
            modalHTML += '<div class="modal-content">';
            modalHTML += '<div class="modal-header">';
            modalHTML += '<h5 class="modal-title" id="exampleModalLongTitle">' + currentProfile.fullName +'</h5>';
            modalHTML += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
            modalHTML += '<span aria-hidden="true">&times;</span>';
            modalHTML += '</button>';
            modalHTML += '</div>';
            modalHTML += '<div class="modal-body">';
            modalHTML += '<p>' + currentProfile.fullName +'</p>';
            modalHTML += '<p>' + currentProfile.missionStatement +'</p>';
            modalHTML += '<p>' + currentProfile.githubUrl +'</p>';
            modalHTML += '<p>' + currentProfile.linkedinUrl +' </p>';
            modalHTML += '<p>' + currentProfile.fullBio +' </p>';
            modalHTML += '</div>';
            modalHTML += '<div class="modal-footer">';
            modalHTML += '<button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Close</button>';
            modalHTML += '</div>';
            modalHTML += '</div>';
            modalHTML += '</div>';
            modalHTML += '</div>';

        });
        $('.tbody').append(finalHTML);
        $('.containModal').append(modalHTML);
    };

    $.get("https://s3.amazonaws.com/dc-profiles/Students.json", function (response) {
        var renderTable = renderProfileTable(response);
        renderTable;
    });

    

});



    
        
            
                
                
                   
                
            
            
                
                
                
                
                
                
                
            
            
                
            
        
    
