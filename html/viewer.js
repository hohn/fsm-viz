
function FsmTool () {}

FsmTool.load = () => {
    $("#fsm_slider").slider({
        value: 0,
        min: 0,
        max: 12,
        step: 1,
        slide: function (event, ui) {
            console.log("Now viewing frame: " + ui.value);
            $("#fsm_frame_id").html("Viewing frame: " + ui.value);
            $("#fsm_animation").html(
                `<img id="fsm_image" src="./fsmviz-simple/fsmviz-frame-${ui.value}.png"/>`)
        }
    });
    $("#fsm_frame_id").innerHTML = $("#fsm_slider").slider("value");
};
    



