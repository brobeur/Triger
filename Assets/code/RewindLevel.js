function OnGUI () {

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (300,250,156,56), "Rewind Two Hours")) {
		Application.LoadLevel (6);
	}
	if (GUI.Button (Rect (300,306,156,56), "Forward Two Hours")) {
		Application.LoadLevel (0);
	}
}