const trackerBox = $("#trackerBox");

$(function () {
    // Click event for Cardio Button
    $("#cardioBtn").on("click", (event) => {
        trackerBox.innerHTML = "";
        let trackerForm = $(`<form action="/submit" method="post">
        <input type="text" class="form-control" name="name" placeholder="Workout Name" autofocus>
        <input type="text" class="form-control" name="duration" placeholder="Workout Duration" autofocus>
        <input type="text" class="form-control" name="distance" placeholder="Workout Distance" autofocus>
        <button class="btn btn-lg btn-primary btn-block" id="submit" type="submit">Submit</button>
        </form>
        `);

        trackerBox.append(trackerForm);
    });

    // Click event for Weights Button
    // Click event for Edit Button
    //         var id = $(this).data("id")
});