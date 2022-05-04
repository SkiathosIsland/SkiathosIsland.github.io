import React, { useState } from "react";

const usePasswordToggle = () => {
    const [visible, setVisiblity] = useState(false);

    const Icon = (
        <i class="fa-solid fa-eye">
            {visible ? "eye-slash" : "eye"}
            onClick={() => setVisiblity(visiblity => !visiblity)}
        </i>
    );

    const InputType = visible ? "text" : "password";

    return [InputType, Icon];
};

export default usePasswordToggle;
